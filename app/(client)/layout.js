import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default function ClientLayout({ children }) {
    return (
        <div className="">
           <Header/>
           <Navigation/>
           <main className="h-screen">
            {children}
           </main>
           <Footer/>
        </div>
    );
}