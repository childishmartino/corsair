import Head from 'next/head';
import Nav from './components/nav';
import Header from './components/header';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section5 from './components/section5';

const Home = ({ keyboards }) => {
  return (
    <div>
      <Head>
        <title>PC Components | Gaming Gear | CORSAIR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  )
}

export default Home;
