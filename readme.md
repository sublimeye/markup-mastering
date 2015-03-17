## Set-up Environment
```bash
git checkout project1 ; (or any other)
npm install
gulp
```

## Repo Rules
- Main branch is master
- Each feature/sub-project must be developed in a separate branch
- Pushes to feature branches must be done only via Pull Requests

## Requirements
- Use [editorConfig](http://editorconfig.org/) plugin in your editor;
- Install NodeJS
- Install [MSYSGIT](https://msysgit.github.io/)
    + Use provided GIT console as a GIT playground
- Install [SourceTree](http://www.sourcetreeapp.com/) as a GIT manager, for better visualization and more complex cases

## NodeJS requirements
- For rapid local environment setup use [LiveServer](https://github.com/tapio/live-server) (Install it globally)

## Recommended configs & Suggestions
- Use IntelliJ WebStorm, PhpStorm for active development
- Use sublime text as a secondary (helper) editor
    + You must Install additional plugins. As a starting point go through [this](https://css-tricks.com/sublime-text-front-end-developers/) article;
    + Do not go for all plugins, but these are highly recommended:
        * Package Manager
        * Emmet
        * SublimeEnhancements
        * Alignment
        * DocBlockr
        * [SCSS bundle](https://github.com/MarioRicalde/SCSS.tmbundle)

*Explanation of layout sizes:*
- Fixed – means that column width is in pixels, e.g. 250px
- Fluid – means that column takes the whole space between the columns or viweport (when browser is resized, column changes its size)
- Unknown – means that column takes the size of inner content. E.g. if you put an image inside with width 100px, the column must be 100px wide, if you put another image with width 200px, the size changes accordingly to 200px)

### Issue development Instructions
Each layout must be put in a separate file
Keep naming consistent.
Each dev must create a separate folder for this project, with a prefix/namespasing: (you can choose any other prefix)
```
/public
  - alek-project1-2-columns (folder created by Sasha)
  - boya-project1-2-columns (folder created by Bogdan)
```

### Links
* http://google.com
* http://matthewjamestaylor.com/blog/perfect-multi-column-liquid-layouts
* http://htmldog.com/guides/css/intermediate/layout/


