/** @format */
"use client";

import { menuOptions } from "@/app/lib/data";
import Image from "@/node_modules/next/image";
import React from "react";
import styles from "./navbar.module.css";
import { Bars2Icon } from "@heroicons/react/24/solid";

export default function Navbar() {
	return (
		<div className={styles.nav}>
			<Image
				src="/threads-logo.png"
				height={50}
				width={50}
				alt="Threads Logo"
			/>
			<div className={styles.menu}>
				{menuOptions.map((menuOption) => (
					<div key={menuOption.id} className={styles.nav_item}>
						<div className={styles.icon}>
							{React.createElement(menuOption.icon.render)}
						</div>
					</div>
				))}
			</div>
			<Bars2Icon className={styles.icon} />
		</div>
	);
}
