import { browser } from '$app/environment'; // Import to check if running on the client
import { goto } from '$app/navigation';

export const load = async ({ url: { pathname } }) => {
  // Define paths you want to redirect from
  const redirects = {
    '/beermoney-sites': '/money-sites',
    '/money-making': '/money-sites',
  };

  // Only perform the redirection on the client-side
  if (browser && redirects[pathname]) {
    goto(redirects[pathname], { replaceState: true });
  }

  return { pathname };
};

export const prerender = true;
