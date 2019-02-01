import React, { Component } from 'react';
import FbImageLibrary from 'react-fb-image-grid';
import FacebookEmoji from 'react-facebook-emoji';
import moment from 'moment';
import '../components/fbPostsCss.css';
import like from '../img/like.png'
import love from '../img/love.png';

class fbPosts extends Component {
    constructor() {
        super();
        this.state = {
            isShowReactionsDiv: false
        }
        this.popOver = this.popOver.bind(this);
        this.hidePopOver = this.hidePopOver.bind(this);
    }
    popOver() {
        this.setState({
            isShowReactionsDiv: true
        })
    }
    hidePopOver(){
        this.setState({
            isShowReactionsDiv: false
        })
    }
    render() {
        const { isShowReactionsDiv } = this.state;
        return (
            <div className="container App-BC">
                <div className="fbPost-Margin">
                    <div className="col-md-5 col-md-offset-3 fbPost-BC fbPost-Padding-Top">
                        <div className="col-md-1">
                            <img className="avatar" src={this.props.object.avatar} />
                        </div>
                        <div className="col-md-11">
                            <p className="createdBy">{this.props.object.createdBy}</p>
                            <p className="createdAt">{moment(this.props.object.createdAt).fromNow()}</p>
                        </div>
                    </div>
                    <div className="col-md-5 col-md-offset-3 fbPost-BC">
                        <div className="col-md-12">
                            <p>{this.props.object.description}</p>
                        </div>
                    </div>
                    <div className="col-md-5 col-md-offset-3 fbPost-BC fbPost-Padding-Bottom">
                        <FbImageLibrary images={this.props.object.images} />
                    </div>
                    <div className="col-md-5 col-md-offset-3 fbPost-BC fbPost-Padding-Bottom">
                        <hr />
                        <div className="col-md-12 fbPost-Padding-Top">
                            <p className="likes"><img src={like} width="22px" /><img src={love} width="24px" />{this.props.object.likes.length}</p>
                        </div>
                    </div>
                    <div onMouseOver={this.popOver} onMouseOut={this.hidePopOver} className="col-md-5 col-md-offset-3 fbPost-BC fbPost-Padding-Bottom">
                        <hr />
                        {isShowReactionsDiv && <div>
                            <FacebookEmoji type="like" size="xs" />
                            <FacebookEmoji type="love" size="xs" />
                            <FacebookEmoji type="wow" size="xs" />
                            <FacebookEmoji type="yay" size="xs" />
                            <FacebookEmoji type="angry" size="xs" />
                            <FacebookEmoji type="haha" size="xs" />
                            <FacebookEmoji type="sad" size="xs" />
                        </div>}
                        <div   className="col-md-4 fbPost-Padding-Top">
                            <p  className="center">Like</p>
                        </div>
                        <div className="col-md-4 fbPost-Padding-Top">
                            <p className="center">Comment</p>
                        </div>
                        <div className="col-md-4 fbPost-Padding-Top">
                            <p className="center">Share</p>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}

export default fbPosts;
