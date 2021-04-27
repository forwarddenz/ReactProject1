const addPostActionCreatorType = 'ADD-POST';
const updateNewPostTextActionCreatorType = 'UPDATE-NEW-POST-TEXT';
const addMessageActionCreatorType = 'ADD-MESSAGE';
const updateNewMessageTextActionCreatorType = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {   //OOP
    _state: {
        HomePage: {
            BestFriends: [
                { id: 1, avatar: 'https://upload.vsemayki.ru/76de3ea6d0a10679b8812be931857089.png', name: 'Иван' },
                { id: 2, avatar: 'https://yt3.ggpht.com/a/AATXAJxq8R8P6f2IN_K-IljfYAJWLMYkBpeEyYB4BQ=s900-c-k-c0xffffffff-no-rj-mo', name: 'Алиса' },
                { id: 3, avatar: 'https://vraki.net/sites/default/files/inline/images/27_89.jpg', name: 'Антон' }
            ],
            Comments: [
                { avatar: 'https://yt3.ggpht.com/a/AATXAJxq8R8P6f2IN_K-IljfYAJWLMYkBpeEyYB4BQ=s900-c-k-c0xffffffff-no-rj-mo', comment: 'Приятно познакомиться мой друг' },
                { avatar: 'https://vraki.net/sites/default/files/inline/images/27_89.jpg', comment: 'Привет' },
                { avatar: 'https://upload.vsemayki.ru/76de3ea6d0a10679b8812be931857089.png', comment: 'Ну как так можно' }
            ]
        },
        newPostText: '',
        newMessageText: '1',
        Dialog: {
            DialogMessage: [
                { avatar: 'https://vraki.net/sites/default/files/inline/images/27_89.jpg', message: 'Привет как дела' },
                { avatar: 'https://miro.medium.com/max/2400/1*4yRfgKQ6utda5-agtj-u8Q.jpeg', message: 'Нормально' },
                { avatar: 'https://vraki.net/sites/default/files/inline/images/27_89.jpg', message: 'И что делаешь' },
                { avatar: 'https://miro.medium.com/max/2400/1*4yRfgKQ6utda5-agtj-u8Q.jpeg', message: 'Давай лучше при встрече расскажу' },
                { avatar: 'https://vraki.net/sites/default/files/inline/images/27_89.jpg', message: 'Ок встретимся' }
            ],
            DialogFriends: [
                { avatar: 'https://vraki.net/sites/default/files/inline/images/27_89.jpg', name: 'Белов Данил' },
                { avatar: 'https://yt3.ggpht.com/a/AATXAJxq8R8P6f2IN_K-IljfYAJWLMYkBpeEyYB4BQ=s900-c-k-c0xffffffff-no-rj-mo', name: 'Иванов Иван' },
                { avatar: 'https://upload.vsemayki.ru/76de3ea6d0a10679b8812be931857089.png', name: 'Антон Бэтмен' },
                { avatar: 'https://miro.medium.com/max/2400/1*4yRfgKQ6utda5-agtj-u8Q.jpeg', name: 'Анимешник Анимешник' },
                { avatar: 'https://yt3.ggpht.com/a/AATXAJxiLGUVDpzHzc_R5EcHU6aiw-jrlSURBPERZIkHMA=s900-c-k-c0xffffffff-no-rj-mo', name: 'Алина Краснова' }
            ],
        },
    },

    _renderAllTree() {
        console.log('123');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._renderAllTree = observer; // Observer Паттерн наюлюдатель. По этому же паттерну работает addEventListener
    },

    dispatch(action) { // {type: 'ADD-POST'}
        if (action.type === addPostActionCreatorType) {
            let newPost = {
                avatar: 'https://yt3.ggpht.com/ytc/AAUvwnj7dkBAoCYU0k5bCvLwsgGo7mhRRYOjh2hx_ebXWw=s900-c-k-c0x00ffffff-no-rj',
                comment: this._state.newPostText
            };
            if (this._state.newPostText != '') {
                this._state.HomePage.Comments.push(newPost);
                this._state.newPostText = '';
                this._renderAllTree(this._state);
            }
        } else if (action.type === updateNewPostTextActionCreatorType) {
            this._state.newPostText = action.text;
            this._renderAllTree(this._state);
        } else if (action.type === updateNewMessageTextActionCreatorType) {
            this._state.newMessageText = action.body;
            this._renderAllTree(this._state);
        } else if (action.type = addMessageActionCreatorType) {
            if (this._state.newMessageText != '') {
                debugger;
                let body = this._state.newMessageText;
                this._state.newMessageText = '';
                this._state.Dialog.DialogMessage.push({ avatar: 'https://yt3.ggpht.com/ytc/AAUvwnj7dkBAoCYU0k5bCvLwsgGo7mhRRYOjh2hx_ebXWw=s900-c-k-c0x00ffffff-no-rj', message: body });
                this._renderAllTree(this._state);
            }
        }
    }
}

export const addPostActionCreator = () => {  // Функция которая возвращает action
    return { type: addPostActionCreatorType };
}

export const updateNewPostTextActionCreator = (text) => {  // Функция которая возвращает action
    return { type: updateNewPostTextActionCreatorType, text: text };
}

export const addMessageCreator = () => {
    return { type: addMessageActionCreatorType }
}

export const updateNewMessageTextCreator = (text) => {
    return { type: updateNewMessageTextActionCreatorType, body: text };
}

export default store;
window.state = store;