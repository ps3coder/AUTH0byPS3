curl --request POST \
  --url https://null.us.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{
    "client_id": "YOUR_CLIENT_ID",
    "client_secret": "YOUR_CLIENT_SECRET",
    "audience": "https://null.us.auth0.com/api/v2/",
    "grant_type": "client_credentials"
  }'


curl --request GET \
  --url http://localhost:3000/private \
  --header 'Authorization: Bearer YOUR_ACTUAL_ACCESS_TOKEN'
