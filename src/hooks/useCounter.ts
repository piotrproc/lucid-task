import {create} from "zustand/react";

const useCounter = create((set) => {

    return {
        counter: 0,
        incrCounter: () => set((state:any) => ({ counter: state.counter + 1 })),
    };
});

export default useCounter;