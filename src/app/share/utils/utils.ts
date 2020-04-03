export function compare(prev: string | number, next: string | number, order: boolean): number {
  [prev, next] = order ? [prev, next] : [next, prev];

  if (isNaN(+prev) || isNaN(+next)) {
    return (prev > next) ? 1 : (prev < next) ? -1 : 0;
  } else {
    return +prev - +next
  }
}
