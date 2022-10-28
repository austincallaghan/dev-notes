import type { Handle, RequestEvent } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  appendHeaders(event, response);

  return response;
};

const appendHeaders = (event: RequestEvent, res: Response) => {
  res.headers.append('X-Content-Type-Options', 'nosniff');
};
