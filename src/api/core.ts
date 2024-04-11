export const api = <T>(url: string): Promise<T> => {
  return fetch(url).then((response) => {
    console.log(url)
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json() as Promise<T>;
  });
};
