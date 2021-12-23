module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      mobile:'375px',
      tablet:'768px',
      desktop:'1335px'
    },
    colors:
    {
      primary:'#3498db',
      neutrals: {
        darkest:'#171717',
        darker:'#222',
        DEFAULT:'#434955',
      },
      gray:{
        border: '#7c7c7c',
        line:'#3b3a3a',
        meta:'#a5a4a4',
        lighter:'#bbb',
        lightest:'#f7f7f7',
        DEFAULT: '#aeadad'
      }
    },
    extend: {},
  },
  plugins: [
		function ({ addComponents }) {
			addComponents({
			'.container': {
				maxWidth: '100%',
				'@screen tablet': {
				maxWidth: '750px',
				},
        '@screen desktop': {
          maxWidth: '1170px',
        },
			}
			})
		}
	],
}
