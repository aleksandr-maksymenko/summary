import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Main page</a>
        </Link>
      </nav>
    </header>
  )
}
