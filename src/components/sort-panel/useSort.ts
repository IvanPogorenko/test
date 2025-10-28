import {useMemo} from "react";
import {SortOption} from "../../interfaces/car-sort.interface";

export function useSort<T>(sortBy: SortOption, items: T[]): T[]{
    return useMemo(() => {
        const itemsCopy = [...items];

        switch (sortBy) {
            case 'price-asc':
                return itemsCopy.sort((a, b) => (a as any).price - (b as any).price);
            case 'price-desc':
                return itemsCopy.sort((a, b) => (b as any).price - (a as any).price);
            case 'year':
                return itemsCopy.sort((a, b) => (b as any).year - (a as any).year);
            default:
                return itemsCopy;
        }
    }, [items, sortBy]);
}