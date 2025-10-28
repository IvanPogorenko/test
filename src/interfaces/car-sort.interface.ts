export type SortOption = 'price-asc' | 'price-desc' | 'year' | '';

export interface SortPanelProps {
    sortBy: SortOption;
    onSortChange: (sort: SortOption) => void;
}