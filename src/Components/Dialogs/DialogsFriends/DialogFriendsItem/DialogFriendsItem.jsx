import s from './DialogFriendsItem.module.css';

function DialogFriendsItem(props) {
    return (
        <div className={s.DialogFriendsItem}>
            <img src={props.avatar} alt=""/>
            <div className={s.FriendsName}>{props.name}</div>
        </div>
    );
}

export default DialogFriendsItem;