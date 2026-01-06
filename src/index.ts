import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({ message: 'Hello Hono!' })
})

app.get('/events', (c) => {
  return c.json({ 
    events: [
      { id: 1, name: 'Fullstack JS Menggunakan TanStack Start' },
      { id: 2, name: 'Deployment Menggunakan Cloudflare Pages' }
    ] 
  })
})

app.get('/participants', (c) => {
  return c.json({ 
    participants: [
      { id: 1, name: 'Budi' },
      { id: 2, name: 'Ahmad' }
    ] 
  })
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
