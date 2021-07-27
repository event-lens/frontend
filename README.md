# Event-Lens Frontend

<img src="https://avatars.githubusercontent.com/u/63131539?s=60&v=4" width="50" height="50">

## Getting Started

### Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Production

First of all, you MUST have Docker installed

Build the Docker Image with:

```bash
sudo docker build . -t event-lens
```

Run the production Container with:

```bash
 sudo docker run -p 3000:3000 event-lens
```

## Contribute

If you want to Contribute to this project, please DM to
[@HectorMtz22](https://github.com/HectorMtz22)
