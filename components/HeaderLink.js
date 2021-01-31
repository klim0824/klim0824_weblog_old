import Link from 'next/link'

const HeaderLink = () => (
  <Link href="/">
    <a className="block text-black no-underline hover:underline focus:underline">
      <img src="/images/icon-72x72.png" alt="" className="mx-4 rounded-full" />
      <span>klim0824.weblog()</span>
    </a>
  </Link>
)

export default HeaderLink
