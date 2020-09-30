/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      display: ['Karrik-Regular', 'sans-serif'],
      body: ['Karrik-Regular', 'sans-serif'],
      serif: ['Minipax-Regular', 'serif'],
      minibold: ['Minipax-Bold', 'serif'],
      minisemi: ['Minipax-SemiBold', 'serif'],
      minimedium: ['Minipax-Medium', 'serif'],
    },
    colors: {
      orange: '#F7941E',
      green: '#006838',
      blue: '#3159C8',
      pink: '#D8CBCF',
      white: '#F6F6F6',
    },
    container: {
      center: true,
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '-10': '-10deg',
      0: '0',
      45: '45deg',
      90: '90deg',
      180: '180deg',
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
