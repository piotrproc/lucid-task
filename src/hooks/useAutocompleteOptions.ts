import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface AutocompleteOption {
    word: string;
    score: number;
}

const useAutocompleteOptions = (word: string) =>
    useQuery<AutocompleteOption[], Error>({
        queryKey: ['words'],
        queryFn: () =>
            axios
                .get(`https://api.datamuse.com/words?sp=${word}*`, {})
                .then((res) => res.data),
        enabled: word.length > 2,
        staleTime: 1000, //1s
    });

export default useAutocompleteOptions;
