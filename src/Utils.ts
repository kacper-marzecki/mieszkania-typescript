export function sum(a: number, b: number): number {
  return a + b;
}
export function range(start: number, end: number): Array<number> {
  return Array.from({ length: end - start }, (_, k) => k + start);
}

export function contains(str: string, elem: string): boolean {
  return str.indexOf(elem) !== -1;
}

export function openLink(url: string) {
  window.open(url, "_blank");
}
