import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'

class App extends React.Component{

    postsArr = [
        {
            title: "Growing Your First Vegetable Garden",
            author: "Emma Stone",
            description: "A beginner's guide to planting and harvesting your own vegetables.",
            },
            {
            title: "Indoor Plant Care Tips",
            author: "James Miller",
            description: "How to keep your indoor plants thriving with minimal effort.",
            },
            {
            title: "Composting for Beginners",
            author: "Sarah Brown",
            description: "Learn how to create nutrient-rich compost for your garden.",
            },
            {
            title: "Creating a Pollinator-Friendly Garden",
            author: "Michael Green",
            description:
            "Tips on attracting bees, butterflies, and other pollinators to your garden.",
            },
            {
            title: "Seasonal Flower Gardening",
            author: "Linda Johnson",
            description:
            "A guide to planting flowers that bloom beautifully throughout the year.",
            },
    ];

    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/posts" element={<Posts postsArr={this.postsArr}/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

export default App