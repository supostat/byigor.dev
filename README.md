# byigor.dev

Personal portfolio site with a CRT terminal aesthetic — boot sequence, phosphor glow, scanlines, and all.

## Tech Stack

- **Next.js 16** with App Router and static export
- **React 19** (Server + Client Components)
- **TypeScript 5**
- **Tailwind CSS 4**

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build
```

Static files are generated in `out/`. Deploy to any static hosting.

## Project Structure

```
app/
  layout.tsx          # Root layout, fonts, metadata
  page.tsx            # Home page, project/contact data
  globals.css         # Design tokens, CRT effects
components/
  screen.tsx          # Boot animation wrapper
  boot-sequence.tsx   # Terminal boot sequence with progress bar
  ascii-header.tsx    # Scalable ASCII art header
  man-page.tsx        # man(1)-style bio section
  project-list.tsx    # Project cards with classified entries
  contact-list.tsx    # Contact links
  status-bar.tsx      # Fixed footer with live clock
```

## License

MIT
