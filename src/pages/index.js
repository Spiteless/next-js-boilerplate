import Head from 'next/head'
import {initializeApollo} from "../lib/apolloClient";
import GET_EPISODES from "./../lib/graphql/getEpisodes.graphql";
import {useQuery} from "@apollo/client";
import Typography from "@mui/material/Typography";



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
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant={"h1"}>Hello World</Typography>
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

