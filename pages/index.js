import Head from 'next/head'
import {client} from "../libs/client"
import BlogItem from '../components/blogItem'


export const getStaticProps = async () => {
  const data = await client.get({
    endpoint:"blog",
    queries:{
      limit:15
    }
  });
  // const tag = await client.get({ endpoint: "tag" });
  return {
    props:{
      blog:data.contents,
      // tags: tag.contents,
    }
  }
}

export default function Home({blog}) {
  return (
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
<Head>
        <title>phihash blog</title>
        <meta name="description" content="phihash blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
</Head>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {blog.map((blog) => {
            return <BlogItem key={blog.id} {...blog}></BlogItem>
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

