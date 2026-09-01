export type VinylStart = {

  rect: { left: number; top: number; width: number; height: number };

  label: string;
  href: string;
};

type Listener = (start: VinylStart) => void;

const listeners = new Set<Listener>();

export function onVinylStart(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function startVinyl(start: VinylStart) {
  listeners.forEach((l) => l(start));
}
