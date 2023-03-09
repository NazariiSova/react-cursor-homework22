export const SET_NEW_POST = "SET_NEW_POST";
export const UPDATE_POSTS = "UPDATE_POSTS";
export const INCREMENT_COMMENTS = "INCREMENT_COMMENTS";
export const DECREMENT_COMMENTS = "DECREMENT_COMMENTS";
export const INCREMENT_REPOSTS = "INCREMENT_REPOSTS";
export const DECREMENT_REPOSTS = "DECREMENT_REPOSTS";
export const INCREMENT_LIKES = "INCREMENT_LIKES";
export const DECREMENT_LIKES = "DECREMENT_LIKES";
export const INCREMENT_DOWNLOADS = "INCREMENT_DOWNLOADS";
export const DECREMENT_DOWNLOADS = "DECREMENT_DOWNLOADS";

export const incrementComments = () => ({
    type: INCREMENT_COMMENTS
});

export const decrementComments = () => ({
    type: DECREMENT_COMMENTS
});

export const incrementReposts = () => ({
    type: INCREMENT_REPOSTS
});

export const decrementReposts = () => ({
    type: DECREMENT_REPOSTS
});

export const incrementLikes = () => ({
    type: INCREMENT_LIKES
});

export const decrementLikes = () => ({
    type: DECREMENT_LIKES
});

export const incrementDownloads = () => ({
    type: INCREMENT_DOWNLOADS
});

export const decrementDownloads = () => ({
    type: DECREMENT_DOWNLOADS
});



export const setNewPost = (data) => ({
    type: SET_NEW_POST,
    payload: data,
});

export const updatePosts = (list) => ({
    type: UPDATE_POSTS,
    payload: list,
});


