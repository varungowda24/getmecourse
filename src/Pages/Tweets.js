import React from 'react';
import { Likes } from './Likes';

const TweetBox = (props) => {
    return (
        <div className="tweet-body">
            {props.children}
        </div>
    )
}

const Image = (props) => {
    return (
        <img src={props.image} alt="Logo" className="picture">
        </img>
    )
}

const Handle = (props) => {
    return (
        <div className="handle">
            {props.handle}
        </div>
    )
}
const TimeStamp = (props) => {
    return (
        <div className="handle">
            {props.handle}
        </div>
    )
}

const Name = (props) => {
    return (
        <div className="name">
            {props.name}
        </div>
    )
}

const Tweet = (props) => {
    return (
        <div className="tweet">
            {props.tweet}


        </div>
    )
}

const TweetImage = (props) => {
    return (
        <img className="tweetImage" src={props.imageUrl} alt="tweeImage" />
    )
}


const TweetBody = (props) => {
    return (
        <TweetBox>
            <div className="inner-body">
                <Image image={props.image} />
                <div className="body">
                    <div className="inner-body">
                        <Name name={props.name} />
                        <Handle handle={props.handle} />
                        <TimeStamp timeStamp={props.timeStamp} />
                    </div>
                    <Tweet tweet={props.tweet} imageUrl={props.tweetImage} />
                    <TweetImage imageUrl={props.tweetImage} />

                    <div className="footer-body">
                        <Likes />
                    </div>
                </div>
            </div>
        </TweetBox>
    )
}

export { TweetBody }