export default function countPaginationRange(
  page: number,
  totalItemsPerPage: number
): [number, number] {
  return [totalItemsPerPage * page - totalItemsPerPage + 1, totalItemsPerPage * page];
}
