import React from "react"
import Layout from '../components/layout';
import eric from '../eric.gif'

export default function Home() {
  return (
    <Layout>
      <img
        src={eric}
        style={{
          width: '100%',
          height:' auto',
        }}
      />
    </Layout>
  );
}
