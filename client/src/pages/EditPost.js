import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client'

const EditPost = () => {

    const {id} = useParams();
    const [post, setPost] = useState({});

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log("Name: ", name, " value: ", value);
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updatePost = async (event) => {
        event.preventDefault();
    
        await supabase
        .from('crewmates')
        .update({name: post.name})
        .eq('id', id);
    
        window.location = "/";
    }

    // useEffect(() => { // fills form with existing values based on id
    //     const getPost = async () => {
    //         const data = await supabase
    //             .from('crewmates')
    //             .select('*')
    //             .eq('id', id)
    //             .single();
    //         setPost(data);
    //     }
    //     getPost();
    // }, [id]);


    const deletePost = async (event) => {
        event.preventDefault();
    
        await supabase
        .from('crewmates')
        .delete()
        .eq('id', id); 
    
        window.location = "/";
    }

    return (
        <div>
            <form>
            <label for="title">Name</label> <br />
                <input type="text" id="title" name="name" value={post.name} onChange={handleChange}/><br />
                <br/>

                <label for="author">Element</label><br />
                <input type="text" id="author" name="element" value={post.element}/><br />
                <br/>

                <label for="description">Companion</label><br />
                <input type="text" id="description" name="companion" value={post.companion}/><br/>
                <br/>

                <label for="image">Image URL</label><br />
                <input type="text" id="image" name="image" value={post.image}/><br/>
                <br/>

                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost