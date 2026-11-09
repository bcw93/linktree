type LinkCardProps = {
  label: string;
  url: string;
};

export default function LinkCard({ label, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-4 text-center font-medium text-gray-900 transition hover:-translate-y-0.5 hover:border-gray-900 hover:shadow-md"
    >
      {label}
    </a>
  );
}
