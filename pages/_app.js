import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component className="bg-gray-400 dark:bg-blue-gray-primary" {...pageProps} />
}

export default MyApp
