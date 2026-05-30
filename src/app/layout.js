
import NavBar from "@/components/NavBar";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ContextProvier from "./context/authContext";



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >

      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <ContextProvier>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            {children}
          </ThemeProvider>

        </ContextProvier></body>
    </html>
  );
}
