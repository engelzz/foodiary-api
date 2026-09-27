import esbuildPluginTsc from 'esbuild-plugin-tsc';

export default () => ({
  bundle: true,
  minify: true,
  sourcemap: false,
  exclude: ['@\'ws-sdk/*'],
  external: ['@\'aws-sdk/*'],
  plugins: [esbuildPluginTsc()],
});
