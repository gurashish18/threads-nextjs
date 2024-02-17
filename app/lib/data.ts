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

export const postData = [
	{
		id: 1,
		username: "TechGeek",
		uploadedWhen: "2024-02-17T12:00:00Z",
		content: {
			type: "text",
			text: "Just upgraded my PC's RAM and the performance boost is incredible! 💻 #TechLife #PCMasterRace",
			imageUrl:
				"https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		likes: 10,
		replies: 5,
	},
	{
		id: 2,
		username: "CodeNinja",
		uploadedWhen: "2024-02-16T14:30:00Z",
		content: {
			type: "text",
			text: "Exploring the latest features in React 18. Can't wait to see what improvements it brings! #ReactJS #WebDev",
			imageUrl:
				"https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		likes: 15,
		replies: 3,
	},
	{
		id: 3,
		username: "ByteBender",
		uploadedWhen: "2024-02-15T09:45:00Z",
		content: {
			type: "text",
			text: "Just finished setting up my new Raspberry Pi cluster. Time to dive into some distributed computing projects! 🚀 #RaspberryPi #DIY",
			imageUrl:
				"https://images.pexels.com/photos/57007/pexels-photo-57007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		likes: 20,
		replies: 8,
	},
	{
		id: 5,
		username: "TechEnthusiast",
		uploadedWhen: "2024-02-17T18:00:00Z",
		content: {
			type: "text",
			text: "Just got my hands on the latest iPhone model. The camera quality is mind-blowing! 📱 #Apple #iPhone",
			imageUrl:
				"https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		likes: 25,
		replies: 12,
	},
	{
		id: 6,
		username: "AIExplorer",
		uploadedWhen: "2024-02-16T10:15:00Z",
		content: {
			type: "text",
			text: "Experimenting with GPT-4. The capabilities of AI models are evolving rapidly! 🤖 #AI #MachineLearning",
			imageUrl:
				"https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		likes: 18,
		replies: 6,
	},
];
