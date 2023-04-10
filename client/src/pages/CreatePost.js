import React from 'react';
import {useState} from 'react';
import { supabase } from '../client'
import './CreatePost.css'

const CreatePost = () => {

    const [post, setPost] = useState({name: "", element: "", companion: "", image: ""});

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

    const createPost = async (event) => {
        
        event.preventDefault(); 

        await supabase
            .from('crewmates')
            .insert({name: post.name, element: post.element, companion: post.companion, image: post.image})
            .select();

            window.location = "/";   
    }

    return (
        <div>
            <form>
                <label for="title">Name</label> <br />
                <input type="text" id="title" name="name" value={post.name} onChange={handleChange}/><br />
                <br/>

                <label for="author">Element</label><br />
                <input type="text" id="author" name="element" value={post.element} onChange={handleChange}/><br />
                <br/>

                <label for="description">Companion</label><br />
                <input type="text" id="description" name="companion" value={post.companion} onChange={handleChange}/><br/>
                <br/>

                <label for="image">Image URL</label><br />
                <input type="text" id="image" name="image" value={post.image} onChange={handleChange}/><br/>
                <br/>

                <input type="submit" value="Submit" onClick={createPost}/>
                <br/>

            </form>
        </div>
    )
}

export default CreatePost