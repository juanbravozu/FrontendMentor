import InfiniteScroll from '@/components/InfiniteScroll';
import ListItem from '@/components/ListItem';
import { readJobDataFromFile, JobData } from '@/utils/functions'
import { useState } from 'react';

interface HomeProps {
  data: Array<JobData> | undefined
}

const HomePage = ({
  data
}: HomeProps) => {
  return (
    <>
      <main>
        <ul>
          {data?.map(({
            id,
            logo,
            company
          }) => 
            <ListItem 
              key={id}
              img={logo}
              altText={`${company} logo`}
              />)}
        </ul>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  try {
    const FILE_PATH = './data.json';
    const data = await readJobDataFromFile(FILE_PATH);

    return {
      props: {data}
    }
  } catch(e) {
    console.error(e);
  }
}

export default HomePage;