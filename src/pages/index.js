import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {initializeApollo} from "../lib/apolloClient";
import GET_EPISODES from "./../lib/graphql/getEpisodes.graphql";
import {useQuery} from "@apollo/client";
import Typography from "@material-ui/core/Typography";



async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_EPISODES,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}


function Home() {

  const {loading: loadingEpisodes, error: errorEpisodes, data: episodes} = useQuery(GET_EPISODES);
  console.log(episodes);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Typography variant={"h1"} className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Typography>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

// Home.layout = (props) => {
//   return(
//       <div className="home-layout">
//         {props.children}
//       </div>
//   )
// };


export default Home;

