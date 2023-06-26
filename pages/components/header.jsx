import Link from 'next/link'

export default function Header() {
  return (
    <>
      <div className="boxes">
        <div className="left-box">
          <div className="box red"><Link href="/">SAMIZUCHELIN2023</Link></div>
        </div>
        <div className="right-box">
          <div className="box green"><Link href="/about">ABOUT</Link></div>
          <div className="box blue"><Link href="/howto">HOW TO</Link></div>
          <div className="box pink"><Link href="samizuchelin">SAMIZUCHELIN</Link></div>
        </div>
      </div>
    </>
  )
}