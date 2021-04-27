import s from './BestFriend.module.css';

function BestFriend(props) {
  return (
    <div className={s.BestFriend}>
        <div className={s.Friend}>
            <img src={props.avatar} alt="ava"/>
            <div className={s.name}>{props.name}</div>
        </div>
    </div>
  );
}

export default BestFriend;