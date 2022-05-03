import React from "react";
import Link from "next/link";
import styles from '../styles/Home.module.css'


const Card=(props)=>{
	return(
		<div className={styles.card}>
		<Link href={"http://localhost:3000/"+props.title}>
		<div>
		   <h2 className={styles.h2tag}>{props.title+" "}</h2>
            <p className={styles.ptag}>{props.smallDesc}</p>
		</div>

          </Link>
		</div>
		
		);
}

export default Card;