# DoCool Website

This is the source code for the DoCool personal website.

## Deployment to Cloudflare Pages

1.  **Log in to Cloudflare Dashboard**: Go to [dash.cloudflare.com](https://dash.cloudflare.com).
2.  **Navigate to Pages**: Select "Workers & Pages" from the sidebar.
3.  **Create Application**: Click "Create application" -> "Pages" -> "Upload assets".
4.  **Upload**: Drag and drop the content of this folder (containing `index.html`, `styles.css`, `script.js`) into the upload area.
5.  **Deploy**: Click "Deploy site".

## Binding Custom Domain (maxc.cc)

1.  After deployment, go to your new Pages project settings.
2.  Select "Custom domains".
3.  Click "Set up a custom domain".
4.  Enter `maxc.cc` (or `www.maxc.cc`).
5.  Follow the instructions to update your DNS records if necessary (Cloudflare usually handles this automatically if they manage your DNS).

## Editing Content

- **Text**: Edit `index.html` to change descriptions or add new projects.
- **Styles**: Edit `styles.css` to change colors or layout.
