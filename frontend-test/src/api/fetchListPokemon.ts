import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

interface pokemonProps {
  name: string;
  url: string;
}

const useGetListPokemons = () => {
  return useQuery({
    queryKey: ['pokemons'],
    queryFn: async () => {
      const fetchPokemons = await axios.get(`${baseUrl}?limit=99`);
      const listPokemonsName = fetchPokemons?.data?.results

      const pokemons = await Promise.all(
        listPokemonsName.map(async (pokemon:pokemonProps) => {
          const pokemonDetail = await axios.get(pokemon.url)
          return pokemonDetail?.data
        })
      )

      return pokemons
    },
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: false,
  })
};

export default useGetListPokemons;
