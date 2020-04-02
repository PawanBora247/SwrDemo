import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

export default function Index() {
  const { data, error } = useSWR( "https://morning-spire-10098.herokuapp.com/rooms.json", fetcher);
  if(!data){
    return <h1>Loading</h1>
  }

  if(error){
    return <h1>Error</h1>
  }

  return(
            <Layout>
              <h1>Room Details </h1>
              <ul>
                {data.map(room => (
                  <li key={room.id}>
                   {room.id} {room.room_type} {room.price}
                  </li>
                ))}
              </ul>
            </Layout>
    )
}