module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  entry: './index.js',
  stats: { warnings:false },
  darkMode: false,
  variants:{
    extend: {
      opacity: ["disabled"]
    }
  }
}
