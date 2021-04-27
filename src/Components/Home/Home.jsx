import React from 'react';
import s from './Home.module.css';
import Player1 from '../PNG/Player1.png';
import renameIMG from '../PNG/RenameIMG.png';
import BestFriend from './BestFriend/BestFriend';
import Coments from './Coment/Comments';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../Redux/state';

function Home(props) {

  let BestFriendsElement = props.BestFriends.map(BF => <BestFriend avatar={BF.avatar} name={BF.name}/>);
  let CommentsElement = props.Comments.map(Coment => <Coments Comments={Coment.comment} avatar={Coment.avatar}/>);
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className={s.Home}>
      <div className={s.transporent}></div>
      <div className={s.container}>
        <img className={s.avatar} src={Player1} alt="avatar"/>
        <h2><div>Гайфутдинов</div><div>Ильназ</div><div>Фанисович</div><div className={s.reenameIMG}><img className={s.rename} src={renameIMG} alt=""/></div></h2>
      </div>
      <h2 className={s.HomeTitle}>Лучшие друзья</h2>
      <div className={s.BestFriends}>
        {BestFriendsElement}
        <div className={s.Comments}>
          <h2 className={s.CommentsTitle}>Коментарии</h2>
          {CommentsElement}
          <div className={s.input}>
            <textarea onChange={onPostChange} className={s.textarea} cols="30" rows="10" placeholder='Коментарий' ref={newPostElement} value={props.newPostText}/>
            <button onClick={ addPost }>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;