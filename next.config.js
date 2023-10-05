/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "googleusercontent.com",
        "oaidalleapiprodscus.blob.core.windows.net",
        "cdn.openai.com"
      ]
    },
  }

  module.exports = nextConfig
    module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/stripe',//api request path
          destination: 'https://dashboard.stripe.com/stripecli/confirm_auth?t=SHy7YmDmqjXfunLGJAbPLGFB6eBhmRFw',//목적 path
        },
      ]
    },
  }