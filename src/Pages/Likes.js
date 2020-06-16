import React from 'react';

class Likes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Likes: 0,
            toggleLike: false
        }
        this.handleLikes = this.handleLikes.bind(this)
    }

    handleLikes() {
        debugger
        this.setState({ toggleLike: !this.state.toggleLike })
        if (!this.state.toggleLike) {
            this.setState({ Likes: 0 })
        } else {
            this.setState({ Likes: 1 })

        }
    }
    render() {
        return (
            <div>
                <i onClick={this.handleLikes} className="fa fa-heart-o likes"> {this.state.Likes}</i>
            </div>
        )
    }
}

export { Likes }