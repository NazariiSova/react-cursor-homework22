import { useSelector } from "react-redux"
import { getPostList } from "../../store/selectors"
import { Post } from "../Post/Post";



export const PostRenderer = () => {
    const listOfPost = useSelector(getPostList);
console.log(listOfPost);
    return (
        <div>
            {listOfPost.map((data) => (
                <Post avatar={data.avatar} firstName={data.firstName} nickname={data.nickname} content={data.content} photo={data.photo} id={data.id}  />
            ))}
        </div>
    )
};