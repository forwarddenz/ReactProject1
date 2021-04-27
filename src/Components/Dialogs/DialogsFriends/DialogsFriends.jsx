import s from './DialogsFriends.module.css';
import DialogFriendsItem from './DialogFriendsItem/DialogFriendsItem';

function DialogFriends(props) {

    let DialogFriendsElement = props.DialogFriends.map(DF => <DialogFriendsItem avatar={DF.avatar} name={DF.name}/>);

    return (
        <div className={s.DialogFriends}>
            {DialogFriendsElement}
        </div>
    );
}

export default DialogFriends;