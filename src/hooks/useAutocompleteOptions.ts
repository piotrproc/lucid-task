import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface AutocompleteOption {
    word: string;
    score: number;
}

const useAutocompleteOptions = () =>
    useQuery<AutocompleteOption[], Error>({
        queryKey: ['words'],
        queryFn: () =>
            axios
                .get(`https://api.datamuse.com/words?sp=asd*`, {})
                .then((res) => res.data),
        staleTime: 1 * 60 * 1000, //1m
    });

export default useAutocompleteOptions;
