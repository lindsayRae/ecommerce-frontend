export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8082';

export const MAGIC_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_6A2319EEA6AEA905';

export const STRIPE_PK =
  process.env.NEXT_PUBLIC_STRIPE_PK ||
  'pk_test_51IJe8vKIlzeRvEPs3C898zTKf3PrZ5IPAD7b9WSSGoWGLUpfw0X0dbdSMk5lrpfhGpIaoPw4KVlHHmeiWLIaA2oN00HOXfsn3g';
/**
 * Given an image return the URL
 * Works for local and deployed strapis
 * @param {any} image
 */

export const fromImageToUrl = (image) => {
  if (!image) {
    return '/vercel.svg';
  }

  if (image.url.indexOf('/') === 0) {
    return `${API_URL}${image.url}`;
  }

  return image.url;
};
