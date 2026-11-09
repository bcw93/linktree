import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      <Image
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={128}
        height={128}
        priority
        className="h-32 w-32 rounded-full border-2 border-gray-300 object-cover"
      />
      <h1 className="mt-6 text-xl font-bold">{name}</h1>
      <p className="mt-2 text-gray-500">{bio}</p>
    </section>
  );
}
