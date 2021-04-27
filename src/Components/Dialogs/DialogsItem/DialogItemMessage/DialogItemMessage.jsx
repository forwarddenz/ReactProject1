import s from './DialogItemMessage.module.css';

function DialogItemMessage(props) {
    return (
        <div className={s.DialogItemMessage}>
            <img src={props.avatar} alt=""/>
            <div className={s.message}>{props.message}</div>
        </div>
    );
}

export default DialogItemMessage;