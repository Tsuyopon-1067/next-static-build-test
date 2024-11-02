import React from 'react';
import Link from 'next/link';

type PageCardProps = {
  href: string;
  children?: React.ReactNode;
  textColor?: "indigo" | "blue" | "red" | "green" | "purple" | "pink" | "yellow" | "gray";
  toTitle: string;
}

export const PageCard = ({
  href,
  children,
  textColor = 'indigo',
  toTitle,
}: PageCardProps) => {
  const colorMap: Record<string, string> = {
    indigo: "text-indigo-500 hover:text-indigo-600",
    blue: "text-blue-500 hover:text-blue-600",
    red: "text-red-500 hover:text-red-600",
    green: "text-green-500 hover:text-green-600",
    purple: "text-purple-500 hover:text-purple-600",
    pink: "text-pink-500 hover:text-pink-600",
    yellow: "text-yellow-500 hover:text-yellow-600",
    gray: "text-gray-500 hover:text-gray-600"
  };

  const colorClass = colorMap[textColor] || colorMap.indigo;

  return (
    <div className={`p-8 rounded-lg shadow-sm border`}>
      <h2 className={`uppercase font-medium mb-3 ${colorClass}`}>
        {toTitle}
      </h2>
      <p className="font-light text-sm text-gray-500 mb-4">
        {children}
      </p>
      <Link href={href}>
        <span className={`flex items-center gap-1 transition-colors duration-200 ${colorClass} text-sm font-medium`}>
          Go To {toTitle}
        </span>
      </Link>
    </div>
  );
};
