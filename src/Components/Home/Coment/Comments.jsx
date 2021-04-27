import s from './Comments.module.css';

function Coment(props) {
  return (
    <div className={s.Comments}>
        <img src={props.avatar} alt="avatar"/>
        <div className={s.comment}>{props.Comments}</div>
    </div>
  );
}

export default Coment;