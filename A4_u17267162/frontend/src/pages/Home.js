import React from 'react'
import Navbar from '../components/Navbar'

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello Home Page!</h1>
                <Navbar />
            </div>
        );
    }
}

export default Home