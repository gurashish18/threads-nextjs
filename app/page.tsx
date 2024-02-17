/** @format */

import CreateThread from "@/components/createThread/createThread";
import Post from "@/components/post/post";
import { postData } from "./lib/data";
import styles from "./page.module.css";

export default function HomePage() {
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<CreateThread />
				{postData.map((post) => (
					<Post
						post={post}
					/>
				))}
			</div>
		</div>
	);
}
