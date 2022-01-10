# Work in progress integrating tinymce-react with Strapi v4

Plugin located in `src/plugins/wysiwyg` that overwrite the Strapis default markdown based richtext editor

Run
```
yarn
yarn develop --watch-admin
```

Current status:
- [x] Editor saves and loads text
- [x] Use Strapi media dialog to upload and insert images 
- [] Tiny MCE Editor configuration hardcoded
- [] Cursor resets to start when changes are passed to Strapi. Currenlty only saving onBlur
- [] Images always inserted at beginning because of the prior issue
- [] Create re-usable plugin
