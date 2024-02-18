/** @format */

import Image from "next/image";
import styles from "./post.module.css";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import {
	HeartIcon,
	ChatBubbleOvalLeftIcon,
	PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

export default function Post({ post }) {
	const calculateUploadedWhen = (uploadedWhen) => {
		const uploadDate = new Date(uploadedWhen);
		const currentDate = new Date();

		const timeDifference = currentDate - uploadDate;
		const seconds = Math.floor(timeDifference / 1000);
		const minutes = Math.floor(seconds / 60);
		const hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);

		if (days > 0) {
			return `${days} day${days !== 1 ? "s" : ""} ago`;
		} else if (hours > 0) {
			return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
		} else if (minutes > 0) {
			return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
		} else {
			return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
		}
	};
	return (
		<div className={styles.card}>
			<div className={styles.cardLeft}>
				<div className={styles.user}>
					<Image
						src="/user.jpeg"
						height={50}
						className={styles.userImage}
						width={50}
						alt="User"
					/>
				</div>
				<div className={styles.line}></div>
			</div>
			<div className={styles.cardRight}>
				<div className={styles.content}>
					<div className={styles.contentHeader}>
						<div className={styles.userName}>
							<span>{post.username}</span>
						</div>
						<div className={styles.options}>
							<span>{calculateUploadedWhen(post.uploadedWhen)}</span>
							<EllipsisHorizontalIcon width={30} height={30} />
						</div>
					</div>
					<div className={styles.contentBody}>
						<p>{post.content.text}</p>
						<img src={post.content.imageUrl} alt="post" />
					</div>
					<div className={styles.cardActions}>
						<HeartIcon width={30} height={30} />
						<ChatBubbleOvalLeftIcon width={30} height={30} />
						<PaperAirplaneIcon width={30} height={30} />
					</div>
					<div className={styles.cardFooter}>
						<span>
							{post.replies} replies - {post.likes} likes
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
