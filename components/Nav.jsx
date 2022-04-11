import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="nav p-3 border-bottom">
      <Link href="/" passHref>
        <h2 className="pointer">Musab Habeeb</h2>
      </Link>

      <Link href="/bio" passHref>
        <p className="ms-5 pointer lead my-auto">About Me</p>
      </Link>
    </nav>
  )
}

export default Nav
