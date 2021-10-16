import '../styles/global.css'
import { ThemeProvider } from "next-themes";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <ThemeProvider attribute="class" enableSystem={true}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  )
}
