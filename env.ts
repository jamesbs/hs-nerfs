export const resolver = env => ({
  env,
  isProd: () => env === 'production',
  isDev: () => env === 'development',
})

export const env = resolver(process.env.NODE_ENV)
