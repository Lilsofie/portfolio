import Link from "next/link";
import MuseumHeader from "../MuseumHeader";

export default function ExperienceRoomHeader({
  intro,
}: {
  intro: React.ReactNode;
}) {
  return (
    <>
      <Link href="/professional" className="back-link back-link--inline">
        <span aria-hidden="true">←</span> Selected Works
      </Link>
      <MuseumHeader label="Room 01" title="Experience" intro={intro} />
    </>
  );
}
