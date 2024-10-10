import React from 'react'
import AllPosts from '../components/Post'
import Navbar from '../components/Navbar';

class Posts extends React.Component{
    constructor(props){
        super(props);
    
    }
    render(){
        return(
            <div>
                <h1>Hello Posts Page!</h1>
                <Navbar />
                <AllPosts postsArr={this.props.postsArr} />
            </div>
        );
    }
}

export default Posts