import type { NextRequest } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const { userId,debug } = getAuth(req);
  console.log(userId, debug())
  return new Response(
    JSON.stringify({
      userId,
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    },
  );
}
