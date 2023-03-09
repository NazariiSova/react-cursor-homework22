import { UPDATE_POSTS, SET_NEW_POST } from "./actions";
import { createStore } from "redux";

const fakeDate = [
    {

        firstName: "R2D2",
        avatar: "https://static.wikia.nocookie.net/rustarwars/images/1/1a/R2d2.jpg/revision/latest?cb=20120924084739",
        nickname: "@droid",
        content: "how to change a wheel?",
        photo: "http://www.artoo-detoo.net/gallery/d/11248-2/IMG_3973.JPG",
        
        comments: "21",
        reposts: "2",
        likes: "45",
        downloads: "1"
    },
    {

        firstName: "Jar Jar Binks",
        avatar: "https://upload.wikimedia.org/wikipedia/en/4/4b/Jjportrait.jpg",
        nickname: "@Gungan",
        content: "the Jedi will come and restore order",
        photo: "https://uway.com.ua/wp-content/uploads/2017/10/kodeks-dzhedaiv.jpg",
      
        comments: "23451",
        reposts: "2232",
        likes: "444325",
        downloads: "435"
    },

    {
            firstName: "Anakin skywalker",
            avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
            nickname: "@dart_vader",
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        photo: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
        
        comments: "428",
        reposts: "146",
        likes: "887",
        downloads: ""
    }
];

export const initalState = {
    postList: fakeDate,
    originalList: fakeDate,
    name: "my name",
};

const rootReduser = (state = initalState, action) => {
    switch (action.type) {
        case SET_NEW_POST:
            return { ...state, postList: [action.payload, ...state.postList], originalList: [action.payload, ...state.originalList] };
        case UPDATE_POSTS:
            return { ...state, postList: action.payload };

        default:
            return state;
    }
};

const store = createStore(rootReduser);

export default store;