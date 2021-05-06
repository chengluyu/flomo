module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'urw-din',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Open Sans',
          'Helvetica Neue',
          'PingFang SC',
          'Hiragino Sans GB',
          'Source Han Sans',
          'Microsoft Yahei',
          'sans-serif'
        ]
      },
      gridTemplateColumns: {
        app: '240px minmax(0, 1fr)',
        heatmap: 'repeat(12, 1rem)'
      },
      gridTemplateRows: {
        app: '240px minmax(0, 1fr)',
        heatmap: 'repeat(7, 1rem)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
