
import { Header,Navbar, Services, AboutUs, Process, Testimonial, Blog, Contact, Footer} from './components'
import { BlogProvider } from './components/blogContext';
import { FooterProvider } from './components/footerContext';
function App() {
  return (
    <BlogProvider >
      <FooterProvider>
        <div className="App">
          <div className='hero-section'>
            <div className='container'>
              <Navbar />
              <Header/>
            </div>
          </div>
          <Services />
          <AboutUs />
          <Process />
          <div className='posts-section'>
            <div className='container section-continer'>
              <Testimonial />
              <Blog />
            </div>
          </div>
          <Contact />
          <Footer />
        </div>
      </FooterProvider>
      </BlogProvider>
  );
}

export default App;
