import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const navbar=()=>{
	return (<div className={styles.main}>
		<Link className={styles.navItem} href="/">Home</Link>
		<Link className={styles.navItem} href="/contactus">Contact Us</Link>
		<Link className={styles.navItem} href="/about">About Us</Link>
	</div>);
}

export default navbar;