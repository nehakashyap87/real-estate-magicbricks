import axios from 'axios';
import cheerio from 'cheerio';

export async function scrapeMagicBricks(city) {
  try {
    const url = `https://www.magicbricks.com/new-projects-${city}`;
    console.log(`Fetching: ${url}`);

    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0', // Prevent blocking
      },
    });

    const $ = cheerio.load(data);
    const projects = [];

    $('.mb-srp__card').each((i, el) => {
      const projectName = $(el).find('.mb-srp__card--title a').text().trim();
      const location = $(el).find('.mb-srp__card--location').text().trim();
      const price = $(el).find('.mb-srp__card--price').text().trim();
      const builder = $(el).find('.mb-srp__card--builder-name').text().trim();

      if (projectName) {
        projects.push({ projectName, location, price, builder });
      }
    });
const response = await axios.get(url, {
  headers: { 'User-Agent': 'Mozilla/5.0' }
});

if (response.status === 404) {
  console.warn('City page not found on MagicBricks.');
  return [];
}

    console.log(`Found ${projects.length} projects.`);
    return projects;
  } catch (error) {
    console.error('Scraper error:', error.message);
    throw new Error('Failed to fetch projects');
  }
}
