/** Acepta un ID o cualquier URL de YouTube (incluido Shorts) y devuelve solo el ID. */
export function youtubeId(value: string): string {
  const m = value.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : value.trim();
}
