# CV source

`Srujan_Kulal_CV.html` is the source for `assets/Srujan_Kulal_Video_Editor_CV.pdf`.

To rebuild the PDF after editing the HTML (needs Google Chrome and the Inter font installed):

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --no-pdf-header-footer \
  --print-to-pdf="$PWD/assets/Srujan_Kulal_Video_Editor_CV.pdf" "file://$PWD/cv-source/Srujan_Kulal_CV.html"
```

Keep it to one A4 page.
