"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Album } from "../content";
import AlbumCard from "./AlbumCard";

export default function AlbumShelf({ albums }: { albums: Album[] }) {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const locked = useRef(false);

  useEffect(() => {
    albums.forEach((a) => router.prefetch(a.href));
  }, [albums, router]);

  const handleSelect = useCallback((album: Album) => {
    if (locked.current) return;
    locked.current = true;
    setSelectedId(album.id);
  }, []);

  return (
    <ul className="shelf" role="list" data-phase={selectedId ? "selecting" : "idle"}>
      {albums.map((album) => (
        <li key={album.id} className="shelf__item">
          <AlbumCard
            album={album}
            selected={selectedId === album.id}
            dimmed={selectedId !== null && selectedId !== album.id}
            disabled={selectedId !== null}
            onSelect={handleSelect}
          />
        </li>
      ))}
    </ul>
  );
}
