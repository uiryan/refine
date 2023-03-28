import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="re.fine &#3196; an independent design practice " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='gradient-background'></div>
      <div className="page-wrapper">
      <div className="hero">
        <Image 
        src="/refine.svg" 
        width={198}
        height={48} 
        alt="refine" />
        <p>Est. 2023</p>
        <p>
          <span className="p-highlight">re.fine</span> is and independent design
          practice based in Tampa, Florida, founded by designer{" "}
          <span className="p-highlight">Ryan Meyers</span>. We design and build
          digital experiences for{" "}
          <span className="p-highlight">ambitious brands</span> all over the world.
          <br />
          <br />
          We are now booking new clients for{" "}
          <span className="p-highlight">spring 2023</span>. If you are serious about
          creating a website that stands the test of time, is joyful and fun, easy
          to use, and gets results, <span className="p-highlight">reach out</span>.
        </p>
        <a href="mailto:hello@ryanmeyers.xyz">hello@ryanmeyers.xyz</a>
      </div>
      <div className="prototype">
        <img
          src="images/prototype-example.png"
          loading="lazy"
          alt=""
          className="prototype-img"
        />
      </div>
    </div>

    </>
  )
}
