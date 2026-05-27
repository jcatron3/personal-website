// app/page.js
import { getSortedPostsData } from '../lib/posts';
import SectionAbout from '../components/sectionAbout';

export default function Home() {
  // Fetch post data directly on the server
  const allPostsData = getSortedPostsData();

  return (
    <div className="space-y-14 lg:space-y-24 flex-grow">
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <SectionAbout />
      </main>
    </div>
  );
}
