import { ConfirmIcon } from "@/components/icons/FontAwesome";
type Props = {
	params: {
		key: string;
	};
	searchParams: any;
};

import style from "./style.module.css";
import Button from "./components/Button";

export default function ConfirmEmail(props: Props) {
	return (
		<main className={style.container}>
			{/* Confirm Email Card */}
			<section className="flex flex-col items-center border-black ">
				{/* Icon Confirm */}
				<ConfirmIcon color="#080" classname="h-32 w-32 mb-8" />
				{/* Title */}
				<h1 className="text-3xl my-4">Email has been Confirmed!</h1>
				{/* Description */}
				<p className="text-xl">
					Your email comfirmed! you can go to login page by press below button!
				</p>
				<p className="text-xl my-4">
					សូមអរគុណសម្រាប់ការបញ្ជាក់អ៊ីម៉ែល ហើយអ្នកអាចធ្វើការចូលទៅកាន់ដោយចុចលើប៊ូតុងខាងក្រោម 
				</p>
				{/* Button */}
				<Button title="Sign Up" classname="h-[50px]"/>
			</section>
		</main>
	);
}
