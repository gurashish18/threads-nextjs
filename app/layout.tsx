/** @format */

import Navbar from "@/components/navbar/navbar";
import "./globals.css";

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<Navbar />
			<div>{children}</div>
		</div>
	);
}
