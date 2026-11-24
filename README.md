# A Very Serious Question

A scroll-driven, mobile-first "will you go on a date with me (in 2028)" site.
Plain HTML/CSS/JS, no build step.

```
index.html
style.css
script.js      ← edit the CONFIG object at the top
stickers/      ← your reaction images (crying.png, sad.png, meh.png, happy.png, love.png)
```

## Before you send it

1. **`script.js` → `CONFIG`**
   - `whatsappNumber`: digits only with country code (e.g. `447700900123`).
   - Questions 2–4 are placeholders. Swap in real facts about yourself (`question`, `options`, `answer`, lines).
     `answer` must match one of the `options` exactly.
   - All other copy (hero, verdicts, captions, build-up, finale) is there too.
2. **Stickers**: drop your images into `stickers/`. Missing ones fall back to emoji.
3. **Music (optional)**: off by default. Without a file it plays a soft generated music-box loop.
   To use a song, add e.g. `music.mp3` to the folder and set `music.src: 'music.mp3'`.

## Run locally

Open `index.html` directly, or for a phone test on the same Wi-Fi:

```
npx serve .
```

## Deploy (drag and drop)

- **Netlify**: app.netlify.com/drop, then drag this folder in.
- **Vercel**: `npx vercel` in this folder (or import from GitHub).
- **GitHub Pages**: push the folder to a repo, then Settings → Pages → deploy from branch.

All paths are relative, so it also works in a GitHub Pages sub-folder.

## Notes

- Each quiz question and the rating slider pause scrolling until she answers, so the score is always complete.
- `prefers-reduced-motion` gets a calm fade-only version. If a CDN fails to load, the site falls back to that version.
- "Add to calendar" opens the native calendar sheet on iPhone and downloads an `.ics` file elsewhere.
  Some in-app browsers (Instagram, TikTok) block downloads, so sending the link via WhatsApp or iMessage works best.
