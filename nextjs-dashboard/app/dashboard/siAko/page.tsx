import User from '@/app/ui/dashboard/user';
import { lusitana } from '@/app/ui/fonts';
import { fetchUserInfo } from '@/app/lib/data';
import UserInfo from '@/app/ui/dashboard/user-info';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
 
export default async function Page() {
    const userinfo = await fetchUserInfo();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
  </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/*
      <UserInfo userinfo={userinfo}  />*/}
      {/*}
      <RevenueChart revenue={revenue}  />
      <LatestInvoices latestInvoices={latestInvoices} />
*/}
      </div>
    </main>
  );
}