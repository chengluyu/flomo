import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      defaults: {
        style: 'postcss'
      },
      postcss: true
    })
  ],
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte'
  }
};

if (process.env.ADAPTER === 'vercel') {
  config.kit.adapter = vercel();
}

export default config;
