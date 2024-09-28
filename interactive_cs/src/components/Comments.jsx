import { useState, useEffect } from "react";

function Comments() {
  
  const [commenterName, setCommenterName] = useState('Name')
  const [comment, setComment] = useState('Title')

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({commenterName})
    console.log({comment})
    // if (comment.trim()) {
    //   addComment(comment);  
    //   setComment('');  
    // }
  }

    useEffect(() => {
    }, []);
  
  return (
    <div>
    <h2>Comments</h2>
    <form onSubmit={handleSubmit}>

      <input value={commenterName}
      onChange={(e) => setCommenterName(e.target.value)}
        placeholder="John Doe"
      ></input>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
      ></textarea>

      <button type="submit">Submit</button>
    </form>

    {/* <ul>
        {Comments.map((comment) => (
          <li key={comment.id}>
            <h2>{comment.title}</h2>
            <p>Price: {comment.price}</p>
          </li>
        ))}
      </ul> */}

  </div>
  );

}

export default Comments;
