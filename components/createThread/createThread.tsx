/** @format */

import Image from "@/node_modules/next/image";
import styles from "./createThread.module.css";
import Button from "../buttons/button";

export default function CreateThread() {
	return (
		<div className={styles.container}>
			<div className={styles.subConatiner}>
				<Image
					src="/user.jpeg"
					height={40}
					width={40}
					alt="User profile"
					className={styles.profileImage}
				/>
				<span className={styles.text}>Start a thread....</span>
			</div>
			<div className={styles.subConatiner}>
				<Button title="Post" />
			</div>
		</div>
	);
}
