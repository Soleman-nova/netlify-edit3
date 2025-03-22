import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss() ],
  //publicDir: 'public',
  //base: process.env.VITE_BASE_PATH || '/Movies_website',
})

//
// import { defineConfig } from 'vite'
//  import react from '@vitejs/plugin-react'
//  import tailwindcss from '@tailwindcss/vite';
//
// // export default defineConfig({
// //   plugins: [react(), tailwindcss()],
// //   // base: process.env.VITE_BASE_PATH || '/Movies_website',
//  })
//
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// //import tailwindcss from '@tailwindcss/vite';
//
//
//
// export default defineConfig({
//   base: '/', // Keep this for Netlify deployment
//   plugins: [react()],
//   publicDir: 'public',
// });
