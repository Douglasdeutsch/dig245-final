{
   "version": 2,
   "name": "not-watch",
   "builds": [
      { "src": "app.js", "use": "@vercel/node" }
   ],
   "routes": [
      { "src": "/(.*)", "dest": "/app.js" }
   ]
}
