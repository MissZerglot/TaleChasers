# TaleChasers
A repository for storing the code for the TaleChasers webshop

Known issues: 

- The homepage sometimes just doesn't load instantly. If you refresh (f5) it should be fine though. 
- (As above) The video on the homepage doesn't always load the first time you load up the application. Refreshing or ensuring you are at the root should fix this. 
- The Webshop (unfinished) is not responsive. This will come in a later update. 
- A bunch of console errors that seemingly crop up for no reason, as the application runs fine thusfar. 
- 'npm run build' creates a folder of the wrong branch. Will need this when I want to upload to filezilla later. 

Addressed Issues: 
- eslint conflicting with React. Added eslintrc.js & .env files to ignore eslint for the time being. 
- localhost would load up the wrong page on startup. Changed address in package.json. 