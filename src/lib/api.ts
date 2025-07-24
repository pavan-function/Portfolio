export async function fetchData(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export function formatPopulation(population: number): string {
  return population.toLocaleString();
}

export const api = {
  get: async (url: string) => {
    return fetchData(url);
  }
};
