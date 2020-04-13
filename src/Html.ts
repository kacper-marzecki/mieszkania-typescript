export function classes(list: Array<[string, boolean]>): string {
  return list
    .filter((it) => it[1])
    .map((it) => it[0])
    .join(" ");
}
