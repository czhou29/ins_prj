import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchPosts, changePostLike } from '../redux/ActionCreators';
import PostDetail from './PostdetailComponent';

const mapDispatchToProps = (dispatch) => ({
  addComment: (postId, author, comment) => dispatch(addComment(postId, author, comment)),
  changePostLike: (postId) => dispatch(changePostLike(postId)),
  fetchPosts: () => {dispatch(fetchPosts())},
})

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments,
  }
}

class Main extends Component {
 
  componentDidMount() {
    this.props.fetchPosts();
  }

  render(){
    const HomePage = () => {
      return (
        <Home 
        post={this.props.posts}
        postsLoading={this.props.posts.isLoading}
        postsErrMess={this.props.posts.errMess}
        changePostLike={this.props.changePostLike}/>
      );
    }

    const PostWithId = ({match}) => {
      return(
        <PostDetail post={this.props.posts.posts.filter((post) => post.id === parseInt(match.params.postId, 10))[0]} 
        isLoading={this.props.posts.isLoading}
        errMess={this.props.posts.errMess}
        comments={this.props.comments.filter((comment) => comment.postId === parseInt(match.params.postId, 10))}
        addComment={this.props.addComment}
        changePostLike={this.props.changePostLike}/>
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/:postId" component={PostWithId} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  };
}

export default withRouter((connect(mapStateToProps, mapDispatchToProps)(Main)));
