import Link from 'next/link';

export default function Header() {
  return (
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex  p-6  flex-row items-center mt-4">
    <Link legacyBehavior href="/">
    <a class="flex title-font font-medium items-center text-gray-900">
      <span class="text-xl font-bold">phihash blog</span>
    </a>
    </Link>
    <nav class="ml-auto flex flex-wrap items-center text-base justify-center">
      {/* <Link legacyBehavior href="/tag"><a class="font-bold text-gray-900  mr-5 hover:text-gray-900">Tag</a></Link> */}
      <Link legacyBehavior href="/link"><a class="font-bold text-gray-900  mr-5 hover:text-gray-900">Link</a></Link>
    </nav>
  </div>
</header>
  );
}
