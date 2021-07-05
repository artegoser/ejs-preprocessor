# ejs-preprocessor
 use ejs like preprocessor

# installation
```npm i ejsp -g```

# usage
create the ejsp.json file(this is config for ejs preprocessor)
example
```json 
{
    "dir":"testinput/", //dir with ejs files
    "outdir":"test/", //outdir with rendered ejs files
    "vars":{"test":"hello"} //vars to ejs
}
```
then run the command ```ejsp``` in the cmd