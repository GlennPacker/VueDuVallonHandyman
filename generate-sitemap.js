const fs = require('fs');
const path = require('path');
const glob = require('glob');

const SITE_URL = process.env.SITE || 'https://www.vueduvallonhandyman.fr';

// Get all static routes from the pages directory
function getStaticRoutes() {
  const pageFiles = glob.sync('src/app/**/page.tsx');
  const data = pageFiles.map(pageFile => {
    const route = pageFile.replace('page', '').replace('src\\app\\', '').replace('.tsx', '').replace('/index', '');
    return `/${route.substring(0, route.length -1)}`; 
  });

  return data.filter(r => r != '/review');
}

// Generate sitemap.xml
async function generateSitemap() {
  const staticRoutes = getStaticRoutes();

  const allRoutes = [...staticRoutes];

  const sitemapEntries = allRoutes.map(route => {
    return `
      <url>
        <loc>${SITE_URL}${route}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>`;
  }).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapEntries}
    </urlset>`;

  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('✅ Sitemap generated successfully!');
}

generateSitemap().catch(console.error);