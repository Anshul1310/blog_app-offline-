import {useRouter} from "next/router";
import React,{useEffect, useState} from "react";
import styles from '../styles/Home.module.css'


const Slug=()=>{
	const router=useRouter();
	useEffect(()=>{
   fetch("http://localhost:3000/api/getAllBlogs").then((a)=>{
     return a.json();
   }).then((parsed)=>{
    setData(parsed);
    console.log(parsed)
   })
  },[]);
	const [data,setData]=useState([]);

	return(
		<div className={styles.styledContainer}>
		{data.map((value)=>{
				if(value.title===router.query.slug){
					return (<div>
					<h1>{value.title}</h1>
					<h5>{value.smallDesc}</h5>
					<p>{value.description}</p>
				</div>);
				}					
			})
		}
	
		</div>)
}

export default Slug;