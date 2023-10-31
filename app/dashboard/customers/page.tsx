import { fetchCustomers, fetchFilteredCustomers } from "@/app/lib/data"
import CustomersTable from "@/app/ui/customers/table"

export const metadata = {
	title: 'Customers',
};

export default async function Customers({
	searchParams,
}: {
	searchParams?: {
		query?: string;
		page?: string;
	};
}) {
	const query = searchParams?.query || ''
	const customers = await fetchFilteredCustomers(query);
	return (
		<main>
			<CustomersTable customers={customers} />
		</main>
	)
}