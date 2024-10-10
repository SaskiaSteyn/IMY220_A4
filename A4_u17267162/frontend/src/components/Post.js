import React from 'react'
import EditPost from './EditPost'

class Post extends React.Component{

    constructor(props){
        super(props);
        this.showEdit = this.showEdit.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.state = {
            hidden: false,
            title: this.props.title,
            description: this.props.description
        }
    }    

    showEdit(){
        this.setState({hidden : !this.state.hidden});
    }

    updateValue(event){
        event.preventDefault();
        this.setState({title: event.target[0].value, description: event.target[1].value});


    }

    render(){
        return(
            <div className="post-card">
                <h2>{this.state.title}</h2>
                <p className="author">{this.props.author}</p>
                <hr/>
                <p>{this.state.description}</p>
                <button onClick={this.showEdit}>Edit post</button>
                {this.state.hidden && <EditPost title={this.props.title} description={this.props.description} updateValue={this.updateValue}/>}
            </div>
        );
    }
}

class AllPosts extends React.Component{
    constructor(props){
        super(props);
    
    }

    
    render() {
        return (
            <div>
                {this.props.postsArr.map((post, index) =>{
                            return(
                                <Post
                                    key={index}
                                    title = {post.title}
                                    author = {post.author}
                                    description = {post.description}
                                />
                            )
                        })}
            </div>
        );
    }
}

export default AllPosts