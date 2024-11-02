import Link from 'next/link';

type SubPageProps = {
  title: string;
};
export const SubPage = ({ title }: SubPageProps) => {
  return (
    <div>
      <div className="p-8">
        <h1 className="text-4xl font-medium text-gray-700 text-center mt-6">This is {title}.</h1>
        <p className="text-center mt-6 text-lg font-light text-gray-500">This is {title}.</p>
        <p className="text-center mt-6 text-lg font-light text-gray-500">
          <Link href="/">
            <span>Back to Home</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
