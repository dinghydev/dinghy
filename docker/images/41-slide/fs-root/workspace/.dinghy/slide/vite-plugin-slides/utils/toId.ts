export function toId(s: string): string {
  return s.toLowerCase().split(" ").map((w) => w.replace(/\W/g, "")).join("-");
}
