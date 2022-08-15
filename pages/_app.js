import '../styles/globals.scss'
// this code for bootstrap classses
import 'bootstrap/dist/css/bootstrap.min.css';
import  Layout  from '../components/Layout';
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
  // this code for bootstrap js 
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);
    return (
         <Layout>
             <Component {...pageProps} />
          </Layout>
    );
}

export default MyApp
