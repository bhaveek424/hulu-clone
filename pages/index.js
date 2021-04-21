import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../utils/requests';

export default function Home({ results }) {
  
  return (
    <div >
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="https://secure.webtoolhub.com/static/resources/icons/set111/63f29b37.png" />
      </Head>

      {/* Header */}
      <Header />    

      {/* Nav */}
      <Nav />

      {/* Result */}
      <Results results={results} />

      
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then(res => res.json());

  return {
    props: {
      results: request.results,
    }
  }
}