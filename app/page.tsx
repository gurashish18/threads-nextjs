/** @format */

import CreateThread from "@/components/createThread/createThread";
import styles from "./page.module.css";

export default function HomePage() {
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<CreateThread />
			</div>
		</div>
	);
}
