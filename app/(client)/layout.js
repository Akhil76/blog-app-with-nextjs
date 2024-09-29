import Footer from "../components/footer";
import Header from "../components/header";
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