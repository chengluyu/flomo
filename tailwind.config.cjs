module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: '240px minmax(0, 1fr)'
      }
    }
  },
  plugins: []
};
