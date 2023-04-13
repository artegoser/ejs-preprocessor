# ejs-preprocessor

use ejs like preprocessor

# installation

`npm i ejsp -g`

# usage

create the ejsp.json file(this is config for ejs preprocessor)
example

```json
{
  "dir": ["testinput", "!testinput/components"], //! for exclude dir
  "outdir": "test/",
  "vars": { "test": "hello" }
}
```

dir - folder(s) with ejs files  
outdir - The folder where the ejs files will be rendered
vars - ejs variables

e.g.

`testinput/index.ejs will` be rendered to `test/index.html`
`testinput/components/menu.ejs` will not be rendered
`testinput/index.css` will be copied to `test/index.css`

then run the command `ejsp` in the cmd
