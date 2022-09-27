export const getTzip10Link = (url: string, payload: string): string => {

  console.log(`Getting tzip10 link for ${url} `)
  return `${url}?type=tzip10&data=${payload}`
}
