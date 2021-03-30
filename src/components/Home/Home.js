import React, {useState, useEffect} from 'react';
import Header from '../Header/Header';
import Endrose from '../Endorse/Endorse';
import About from '../About/About';
import Feature from '../Feature/Feature';
import Story from '../Story/Story';
import Work from '../Work/Work';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Home = () => {
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500)
  }, []);

  
    return(

        loading ? 
            
        <div className='app'>
            <ClimbingBoxLoader color={'#8098ee'} loading={loading} size={40} />
        </div>
        :(
            <div>
            <Header />
            <Endrose />
            <About />
            <Feature />
            
            <Story />
            <Work />
           
            
        </div>
        )
      
    )
}

export default Home;