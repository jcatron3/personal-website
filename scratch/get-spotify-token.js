// scratch/get-spotify-token.js
/**
 * Helper script to exchange a Spotify Authorization Code for a Refresh Token.
 * 
 * Usage:
 *   source ~/personal/setup.sh
 *   node scratch/get-spotify-token.js <CLIENT_ID> <CLIENT_SECRET> <AUTH_CODE>
 */

const args = process.argv.slice(2);

if (args.length < 3) {
  console.error('Error: Missing arguments.');
  console.log('\nUsage:');
  console.log('  node scratch/get-spotify-token.js <CLIENT_ID> <CLIENT_SECRET> <AUTH_CODE>\n');
  process.exit(1);
}

const [clientId, clientSecret, authCode] = args;
const redirectUri = 'http://localhost:3000'; // Must match the redirect URI configured in Spotify Developer Dashboard
const tokenEndpoint = 'https://accounts.spotify.com/api/token';

async function getRefreshToken() {
  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  try {
    console.log('Sending request to Spotify token endpoint...');
    
    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: authCode,
        redirect_uri: redirectUri
      })
    });

    const data = await response.json();

    if (response.status !== 200) {
      console.error('\n❌ Error from Spotify API:', data);
      process.exit(1);
    }

    console.log('\n🟢 Success! Copy these variables into your /Users/jcatron/personal/personal-website/.env.local file:\n');
    console.log(`SPOTIFY_CLIENT_ID=${clientId}`);
    console.log(`SPOTIFY_CLIENT_SECRET=${clientSecret}`);
    console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`);
    console.log('\n--------------------------------------------------');
  } catch (error) {
    console.error('\n❌ Network or execution error:', error.message);
  }
}

getRefreshToken();
