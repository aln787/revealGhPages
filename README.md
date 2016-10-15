##Reveal Markdown / GH-Pages
Makes creating presentations feel, more like programming.  Uses Github-pages to share presentation content and provides proper version control.

-----------

###Quick start
```
git clone https://github.com/aln787/revealGhPages.git
cd revealGhPages
git remote rm origin
subl index.html
```

```
<head>
        <meta charset="utf-8">
        <title>`Your presentation Title`</title>
        <meta name="description" content="`your presentation description`" />
```
- Modify `index.html` to include the title of your presentation
- Add a new repository to Github.com
- Add the repositproy to your presentation and deploy

```
git remote add origin <your new repository>
git status
git commit -a
git push origin gh-pages
```
- View your deployed presentation: 

```
<your github username>.github.io/<your new repo name>
```

- Open `presentation.md` and update the contents of the presentation
- Commit changes and redeploy

```
git commit -a
git push origin gh-pages
```

- View updates to your deployed presentation: 

```
<your github username>.github.io/<your new repo name>
```
## Many presentations in one directory

If you have a file in the same directory as your index.html file you can load that file as
a presentation without changing the html file  by adding a html query string to the url.

```
<your github username>.github.io/<your new repo name>?md=<your md file name>
```
this way you can have many pressentations with only one index.html file.
----------
## YAML front matter

You can set markdown options and revealOptions specific to your pressentation in 
the .md file with YAML front matter header Jekyll style.

```
---
title: Foobar
separator: <!--s-->
verticalSeparator: <!--v-->
theme: css/theme/solarized.css
revealOptions:
    transition: 'fade'
---
Foo

Note: test note

<!--s-->

# Bar

<!--v-->
´´´

these will override the options set in the index.html

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