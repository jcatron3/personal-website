// app/posts/[id]/page.js
import Layout from '../../../components/layout';
import utilStyles from '../../../styles/utils.module.css';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import Date from '../../../components/date';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    id: path.params.id
  }));
}

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.id);
  return {
    title: postData.title
  };
}

export default async function Post({ params }) {
  const postData = await getPostData(params.id);

  return (
    <Layout>
      <article className="mt-16 mb-16 max-w-2xl mx-auto">
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={`${utilStyles.lightText} mb-4`}>
          <Date dateString={postData.date} />
        </div>
        <div 
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
      </article>
    </Layout>
  );
}
