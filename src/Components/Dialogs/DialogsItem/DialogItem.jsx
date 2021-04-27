import s from './DialogItem.module.css';
import DialogItemMessage from './DialogItemMessage/DialogItemMessage';
import React from 'react';
import { addMessageCreator, updateNewMessageTextCreator } from '../../../Redux/state';

function DialogItem(props) {

    let state = props.store.getState().Dialog;

    let DialogMessageElement = state.DialogMessage.map(DM => <DialogItemMessage avatar={DM.avatar} message={DM.message} />);
    let newMessageElement = React.createRef();
    let newMessageText = props.newMessageText;

    let onSendMessageClick = () => {
        props.dispatch(addMessageCreator());
    }

    let onNewMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextCreator(text));
    }

    return (
        <div className={s.DialogItem}>
            <div className={s.DialogElement}>
                {DialogMessageElement}
            </div>
            <div className={s.input}>
                <textarea onChange={ onNewMessageChange } className={s.textarea} placeholder='Наберите сообщение' ref={newMessageElement} value={newMessageText}/>
                <button onClick={ onSendMessageClick }>Отправить</button>
            </div>
        </div>
    );
}

export default DialogItem;