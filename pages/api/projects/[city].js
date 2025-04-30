import { scrapeMagicBricks } from '../../../lib/scraper';
import { geocodeLocation } from '../../../lib/geocoder';

export default async function handler(req, res) {
  const { city } = req.query;

  try {
    console.log(`Scraping city: ${city}`);
    
    const projects = await scrapeMagicBricks(city);
    
    if (!Array.isArray(projects)) {
      throw new Error('Scraper returned invalid data');
    }

    const enriched = await Promise.all(
      projects.map(async (project) => {
        const coords = await geocodeLocation(project.location);
        return { ...project, coordinates: coords };
      })
    );

    res.status(200).json({ projects: enriched });
  } catch (error) {
    console.error('API ERROR:', error.message);
    res.status(500).json({ error: 'Server Error', details: error.message });
  }
}
