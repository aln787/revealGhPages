##Reveal Markdown / GH-Pages
Makes creating presentations feel, more like programming.  Uses Github-pages to share presentation content and provides proper version control.
  - Make changes by modifying the markdown file presentation.md
  - Changes pushed to the Github in a branch named gh-pages will build as a static site

###GH Pages
- GH Pages URL structure: ```<username>.github.io/<project name>```

----------

###View Locally

####Install HTTP Server
```
#Install NPM
curl https://npmjs.org/install.sh | sh
#If you already have NPM
npm install http-server -g
```

####Serve Content
```
http-server -p 8082
```