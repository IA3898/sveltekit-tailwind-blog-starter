import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';

const config = {
  // Add '.md' to the list of extensions
  extensions: ['.svelte', '.md'],

  // Configure the preprocessor to use mdsvex
  preprocess: [
    sveltePreprocess(),
    mdsvex({
      extension: '.md',
      // Add any additional mdsvex configuration here
    })
  ],

  kit: {
    paths: {
      relative: false,
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
	    precompress: false

      // Other adapter options...
    }),
    // Other kit options...
  },
};

export default config;


