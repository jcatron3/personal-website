import '../styles/global.css'
import { ThemeProvider } from "next-themes";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="dark:bg-black flex flex-col min-h-screen">
      <ThemeProvider attribute="class" enableSystem={true}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  )
}
