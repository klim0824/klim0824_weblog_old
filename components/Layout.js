import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = (props) => (
  <>
    <Header place={props.place} />

    <main role="main" className="max-w-3xl mx-4 md:mx-auto">
      {props.children}
    </main>

    <Footer />
  </>
)

export default Layout
