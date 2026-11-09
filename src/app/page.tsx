import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center px-4 py-16">
      <div className="w-full max-w-sm">
        <Profile
          name={profile.name}
          bio={profile.bio}
          imageUrl={profile.imageUrl}
        />

        <ul className="mt-10 flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.label}>
              <LinkCard label={link.label} url={link.url} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
