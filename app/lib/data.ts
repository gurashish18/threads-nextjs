/** @format */

import { MenuOption } from "./definations";
import {
	HomeIcon,
	MagnifyingGlassIcon,
	PencilSquareIcon,
	HeartIcon,
	UserIcon,
} from "@heroicons/react/24/solid";

export const menuOptions: MenuOption[] = [
	{
		id: "1",
		name: "Home",
		icon: HomeIcon,
		link: "/",
	},
	{
		id: "2",
		name: "Search",
		icon: MagnifyingGlassIcon,
		link: "/",
	},
	{
		id: "3",
		name: "New Thread",
		icon: PencilSquareIcon,
		link: "/",
	},
	{
		id: "4",
		name: "My Activity",
		icon: HeartIcon,
		link: "/",
	},
	{
		id: "5",
		name: "Profile",
		icon: UserIcon,
		link: "/",
	},
];
