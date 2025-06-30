"use client";
import React, { useState } from "react";
import React { usememo } from "react";
const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maintask, setmaintask] = useState([]);
  const submithandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { title, desc }]);
    setTitle("");
    setDesc("");
  };
  const deleteHandler = (i) => {
    let copytask = [...maintask];
    copytask.splice(i,1)
    setmaintask(copytask);
    
  }
  let rendertask = <h2 className="text-4xl font-bold">🙄🙄 NO TASK ADDED 🙄🙄</h2>;
  if(maintask.length > 0) {
    rendertask = maintask.map((task, index) => (
      <li key = {index} className="text-2xl m-2 flex items-center justify-between">
        <h4 className="text-3xl font-bold">{task.title}</h4>
        <h5 className="text-3xl font-bold">{task.desc}</h5>
        <button onClick= {(index) => deleteHandler(index)}
          className="bg-rose-950 text-white  px-5 py-4 m-2 rounded-tr-xl rounded-bl-xl hover:bg-rose-800 text-2xl font-bold">
          DELETE
        </button>
      </li>
    ));
  }
  return (
    <>
      <h1 className="bg-gradient-to-r from-slate-950 to-zinc-800 text-white p-5 text-6xl text-center">
        💭💭THIS IS MY TODOO LIST💭💭
      </h1>
      <form className="text-center m-5" onSubmit={submithandler}>
        <input
          type="text"
          placeholder="Enter title here"
          className="text-2xl border-zinc-950 border-2 m-5 px-4 py-2 bo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="bg-black text-white px-4 py-2 text-xl text-bold rounded-tr-xl rounded-bl-xl hover:bg-rose/50been ">  
          Add task
        </button>
        <input
          type="text"
          placeholder="Enter description here"
          className="text-2xl border-zinc-900 border-2 m-5 px-4 py-2"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </form>
      <hr />
      <div className="p-8 bg-gradient-to-r from-gray-900 to-gray-600 text-white text-center">
        <ul>{rendertask}</ul>
      </div>
    </>
  );
};

export default page;
