import Link from 'next/link'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export default function blogItem({id,title,tags,createdAt,updatedAt,publishedAt,revisedAt,body,eye_catch}) {
  return (
    <>
      <div class="p-4 md:w-1/2 xl:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Link href={`blog/${id}`} legacyBehavior>
          <img class="lg:h-48 md:h-36 w-full object-cover object-center hover:cursor-pointer" src={eye_catch.url} alt="blog" />
        </Link>
          <div class="p-5">
            {tags.map((tag) => {
                return (
                  <span class="tracking-widest text-sm title-font font-semibold text-gray-800 mb-1 mr-3">
                      {tag.tag}
                  </span>
                  )
            })}
            <Link href={`blog/${id}`} legacyBehavior>
              <div class='hover:cursor-pointer'>
              {/* divタグないとLinkエラー */}
                <p class="leading-relaxed my-2 font-semibold text-sm text-gray-700">{dayjs.utc(createdAt).tz('Asia/Tokyo').format('YY/MM/DD')}</p>
                <h1 class="title-font text-lg font-bold text-gray-900 mt-2 mb-1">{title}</h1>

              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
