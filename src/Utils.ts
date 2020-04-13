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

export function noop(_: any) {}

export function copyToClipboard(str: string) {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selected =
    document.getSelection()?.rangeCount || 0 > 0
      ? document.getSelection()?.getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection()?.removeAllRanges();
    document.getSelection()?.addRange(selected);
  }
}
