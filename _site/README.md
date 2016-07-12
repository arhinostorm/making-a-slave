# Making a Slave

# Versioning

Please use Git Flow; https://github.com/nvie/gitflow and Semantic Versioning; http://semver.org/

# Build

The site is created using [jekyll](https://jekyllrb.com/). All code to be uploaded to server lives in the _site folder. 

You can rebuild the _site folder by running:

jekyll build

in the root folder.

You can test the site locally using:

jekyll watch

NB - in order to test locally you will need to make a few changes to the _config.yml file

- comment out the url variable using a hash
- comment out these lines

gems:
    - jekyll-minifier 

this is the html minifier, which causes trouble serving locally. Be sure to put correct url var for live site and jekyll-minifier back into config if building for live site

# Videos

If for any reason the videos need changing, then you need to edit the index.html file in each of the following folders:

- indentity
- fear
- end-game

Simply change the vimeoid variable in each file and then rebuild the _site folder.

# Javascript

There are 2 js files. One for the home page and one for the video pages:

- main.js (homepage)
- main-media.js (video page)

It is unlikely there will need amending, but if they do, make your changes and then run the build scripts by going to the js directory in terminal and running:

r.js -o build-media.js

and

r.js -o build.js


