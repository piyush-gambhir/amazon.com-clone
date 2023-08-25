import Header from './components/Header'
import Footer from './components/Footer'

export default function apLayout({ children }) {
    return (
        <section className="flex flex-col p-4 mb-6">
            <Header />
            {children}
            <Footer />
        </section>
    )
}
