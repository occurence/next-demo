import User from '@/app/ui/dashboard/user';
import { lusitana } from '@/app/ui/fonts';
import { fetchUser } from '@/app/lib/data';
 
export default async function Page() {
    const latestInvoices = await fetchUser();
  return (
    <main>
      {/*<h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
  </h1>*/}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <User latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}