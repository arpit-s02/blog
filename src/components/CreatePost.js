import {db} from '../firebaseConfig'
import { collection, addDoc } from "firebase/firestore/lite";
import {useFormInput} from '../hooks';

function CreatePost(){
    const title = useFormInput('');
    const subTitle = useFormInput('');
    const content = useFormInput('');
    const col = collection(db, 'posts');

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        await addDoc(col, {
            title: title.value,
            subTitle: subTitle.value,
            content: content.value,
            createdAt: new Date()
        });

    }

    return(
        <div className="create-post">
            <h1> Create Post </h1>

            <form onSubmit={handleFormSubmit}>
                <div className="form-field">
                    <label> Title </label>
                    <input {...title} />
                </div>

                <div className="form-field">
                    <label> Sub Title </label>
                    <input {...subTitle} />
                </div>

                <div className="form-field">
                    <label> Content </label>
                    <textarea {...content}></textarea>
                </div>

                <button className="create-post-btn"> Create Post </button>
            </form>
        </div>
        
    );
}

export default CreatePost;