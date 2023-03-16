/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/message-api',
        destination: `https://api.twilio.com/2010-04-01/Accounts/${process.env.NEXT_PUBLIC_ACCOUNT_SID}/Messages.json`,
      },
    ]
  },
}

module.exports = nextConfig
