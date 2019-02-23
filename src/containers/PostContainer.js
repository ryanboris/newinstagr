import React from 'react';
import Username from '../components/Username';
import Thumbnail from '../components/Thumbnail';
import PostImage from '../components/PostImage';
import Likes from '../components/Likes';
import Comment from '../components/Comment';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  .top-section {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    img {
      display: inline-block;
      border-radius: 100px;
      transform: scale(0.35);
    }
  }
  .bottom-section {
    display: flex;
    flex-flow: column nowrap;
    margin: 50px 15%;

    div {
      font-size: 1.4rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;

export default function PostContainer(props) {
  return (
    <Container>
      <div className="top-section">
        <Thumbnail thumbnailUrl={props.thumbnailUrl} />
        <Username username={props.username} />
      </div>
      <div className="bottom-section">
        <PostImage imageUrl={props.imageUrl} />
        <Likes likes={props.likes} />
        <Comment comments={props.comments} />
      </div>
    </Container>
  );
}
