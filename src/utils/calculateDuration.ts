import dayjs from "dayjs";

export const calculateDuration = (hireDate: Date | string) => {
	const hire = dayjs(hireDate);
	const now = dayjs();

	const years = now.diff(hire, "year");
	const months = now.diff(hire.add(years, "years"), "month");
	const days = now.diff(hire.add(years, "years").add(months, "months"), "day");

	return { years, months, days };
};
