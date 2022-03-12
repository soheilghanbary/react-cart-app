module.exports = {
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
      }),
    },
  },
  plugins: [],
}
