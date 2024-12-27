module.exports = {
    theme: {
    },
    plugins: [
        require('@tailwindcss/typography'),
    ]
}

// copied from earlier repo:
// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
// 	theme: {
// 	  extend: {
// 		colors: {
// 		  dark1: '#0A192F',
// 		  dark2: '#3C3C3C',
// 		  light1: '#C8C6D7',
// 		//   light2: '#C7CEDB',
// 		  accent1: '#931F1D',
// 		  accent2: '#008DD5',
// 		},
// 		fontFamily: {
// 		  sans: ['Open Sans', 'sans-serif'], 
// 		},
// 		spacing: {
// 		  small1: '0.25rem', // 4px
// 		  small2: '0.5rem',  // 8px
// 		  small3: '0.75rem', // 12px
// 		  default: '1rem',   // 16px
// 		  medium1: '1.25rem',// 20px
// 		  medium2: '1.5rem', // 24px
// 		  medium3: '2rem',   // 32px
// 		  large1: '2.5rem',  // 40px
// 		  large2: '3rem',    // 48px
// 		  large3: '3.5rem',  // 56px
// 		},
// 		maxWidth: {
// 		  'screen-xl': '80rem', // 1280px
// 		},
// 		flex: {
// 		  '2': '2 2 0%', // Custom flex values
// 		},
// 	  },
// 	  screens: {
// 		tablet: { max: '64rem' }, // ~1025px
// 		phone: { max: '48rem' }  // ~770px
// 	  }
// 	},
// 	plugins: [],
//   }






// and copied from the earlier index.css file:
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
// @import '@fortawesome/fontawesome-free/css/all.css';



// html {
//   font-size: 16px;
//   scroll-behavior: smooth;
// }

// body {
//   @apply bg-dark1 text-light1 font-sans;
//   margin: 0;
//   padding: 0;
//   scroll-behavior: smooth;
// }

// h1, h2, h3, h4, h5, h6 {
//   @apply text-light1 font-bold;
// }

// a, button {
//   @apply text-accent2 bg-dark2 rounded transition-colors duration-500;
//   &:hover { 
//     @apply text-dark1 bg-accent1;
//   } }

// .flex-center {
//   @apply flex flex-col items-center justify-center text-center;
// }

// .panel {
//   @apply p-4 m-4 bg-dark2 bg-opacity-50 rounded-lg shadow-lg;
// }

// .mobile-menu {
//   @apply hidden;
// }

// .mobile-menu-button:focus + .mobile-menu,
// .mobile-menu:hover {
//   @apply block;
// }