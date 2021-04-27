import s from './Dialogs.module.css';
import DialogFriends from './DialogsFriends/DialogsFriends';
import DialogItem from './DialogsItem/DialogItem';

function Dialogs(props) {
  return (
    <div className={s.container}>
      <div className={s.line}></div>
      <div className={s.Dialogs}>
        <DialogFriends DialogFriends={props.Dialog.DialogFriends} />
        <DialogItem DialogMessage={props.Dialog.DialogMessage} newMessageText={props.newMessageText} store={props.store} dispatch={props.dispatch}/>
      </div>
    </div>
  );
}

export default Dialogs;