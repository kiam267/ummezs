import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/drizzle/db'; // your drizzle instance

export const auth = betterAuth({
  // ...other Better Auth config options
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {},

  // Configure Better Auth with Drizzle adapter
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
});
