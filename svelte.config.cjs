const sveltePreprocess = require('svelte-preprocess');
const node = require('@sveltejs/adapter-node');
const vercel = require('@sveltejs/adapter-vercel');
const static = require('@sveltejs/adapter-static');
const pkg = require('./package.json');

const adapters = { node, vercel, static };

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    sveltePreprocess({
      defaults: {
        style: 'postcss'
      },
      postcss: true
    })
  ],
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: adapters[(process.env.ADAPTER ?? 'node').toLowerCase()](),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {})
      }
    }
  }
};