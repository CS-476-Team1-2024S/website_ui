# Uploading to Webserver

!IMPORTANT!
If you do end up ever needing to make a PROD or DEV build then make sure to set the "homepage" value in the package.json file to the right one
Don't forget to build before uploading to webserver!


### Main locations

PROD (main branch):
/cs476/knowledgebase/PROD/

DEV (develop branch):
/cs476/knowledgebase/DEV/

### Other

LOCAL/NO BUILD (own branch):
Just put a . inside the quotes

## Scripts (Upload to DEV/PROD)

Before using the two python scripts </br>
1 - Make sure Python and pip are installed and working in VSCode</br>
2 - Create a .env file inside of website_ui folder (.env is set to be ignored by .gitignore) </br>
  --Format for .env file-- </br>
   SFTP_USER: "username" </br>
   SFTP_PASS: "password" </br>
3 - Make sure you're connected to washington VPN before running scripts