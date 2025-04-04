import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Link href="/employees">
				<Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Go to Employees Page
				</Button>
			</Link>
		</div>
	);
}
