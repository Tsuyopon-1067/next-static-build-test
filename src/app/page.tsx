import { PageCard } from '@/components/PageCard';

export default function Home() {
  return (
    <div>
      <div className="p-8">
        <h1 className="text-4xl font-medium text-gray-700 text-center mt-6">This is Index Page.</h1>
        <p className="text-center mt-6 text-lg font-light text-gray-500">This is Index Page.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        <PageCard href="/page1" toTitle="Page 1" textColor="indigo">
          <p className="font-light text-sm text-gray-500 mb-3">
            This is a description of the page1.
          </p>
        </PageCard>
        <PageCard href="/page2" toTitle="Page 2" textColor="green">
          <p className="font-light text-sm text-gray-500 mb-3">
            This is a description of the page2.
          </p>
        </PageCard>
        <PageCard href="/page3" toTitle="Page 3" textColor="red">
          <p className="font-light text-sm text-gray-500 mb-3">
            This is a description of the page3.
          </p>
        </PageCard>
      </div>
    </div>
  );
}
