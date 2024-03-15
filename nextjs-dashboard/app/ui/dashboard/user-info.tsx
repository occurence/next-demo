import { Card } from '@/app/ui/dashboard/cards';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { UserInfo } from '@/app/lib/definitions';

export default async function User_Info({
    userinfo,
}: {
    userinfo: UserInfo[];
}) {
    
  return (
    <div className="flex w-full flex-col md:col-span-4">

      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        User Info
      </h2>

      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

        <div className="bg-white px-6">
          {userinfo.map((info, i) => {
            return (
              <div
                key={info.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <Image
                    src={info.image_url}
                    alt={`${info.first_name}'s profile picture`}
                    className="mr-4 rounded-none"
                    width={200}
                    height={200}
                  />

                </div>
                <div>{info.last_name},{info.first_name}</div>
                <Card title="Collected" value={info.image_url} type="collected" />
              </div>
            );
          })}
        </div>








        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
