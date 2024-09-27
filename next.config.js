if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

// Use the URL constructor to reliably extract the domain
const wpUrl = new URL(process.env.WORDPRESS_API_URL);
const wpDomain = wpUrl.hostname;

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      wpDomain, // Valid WordPress domain parsed from the URL.
      '0.gravatar.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'secure.gravatar.com',
    ],
  },
}
