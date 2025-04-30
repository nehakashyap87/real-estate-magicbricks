import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../../components/Map'), { ssr: false });

export default function CityPage() {
  const router = useRouter();
  const { cityName } = router.query;

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!cityName) return;

    const fetchProjects = async () => {
      try {
        const res = await fetch(`/api/projects/${cityName}`);
        const data = await res.json();

        if (res.ok && Array.isArray(data.projects)) {
          setProjects(data.projects);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        setError('Failed to load project data');
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [cityName]);

  if (loading) return <div className="text-center p-4">Loading projects...</div>;
  if (error) return <div className="text-center p-4 text-red-600">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projects in {cityName}</h1>

      {projects.length === 0 ? (
        <div>No projects found.</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((proj, index) => (
              <div key={index} className="p-4 border rounded shadow">
                <h2 className="font-semibold">{proj.projectName}</h2>
                <p>{proj.location}</p>
                <p>{proj.price}</p>
                <p>{proj.builder}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Map projects={projects} />
          </div>
        </>
      )}
    </div>
  );
}
