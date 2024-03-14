import React, { useState } from 'react';
import s from "./style.module.css";
import { Search as SearchIcon } from 'react-bootstrap-icons';

export  function SearchBar({onSubmit}) {
const [value , setValue] =  useState("");
    function submit(e){
        if(e.key === "Enter" && e.target.value.trim()!==""){
            onSubmit(e.target.value)
            setValue("");
        }
    }

    function handleChange(e){
        setValue(e.target.value);
    }

  return (
    <>
    <SearchIcon className={s.icon}/>
      <input className={s.input} type="text" value={value} onChange={handleChange} onKeyUp={submit} placeholder='Search a tv show you may like' />
    </>
  )
}
