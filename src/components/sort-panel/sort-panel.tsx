import React from "react";
import {SortOption, SortPanelProps} from "../../interfaces/car-sort.interface";
import "./sort-panel.css"

const SortPanel: React.FC<SortPanelProps> = ({sortBy, onSortChange}) => {
    return (
        <div className="sort-panel">
            <h3 className="sort-panel__title">Сортировка</h3>
            <div className="sort-panel__options">
                <label className="sort-panel__option">
                    <input
                        type="radio"
                        name="sort"
                        value="price-asc"
                        checked={sortBy === 'price-asc'}
                        onChange={(e) => onSortChange(e.target.value as SortOption)}/>
                    <span className="sort-panel__label">По возрастанию цены</span>
                </label>
                <label className="sort-panel__option">
                    <input
                        type="radio"
                        name="sort"
                        value="price-desc"
                        checked={sortBy === 'price-desc'}
                        onChange={(e) => onSortChange(e.target.value as SortOption)}/>
                    <span className="sort-panel__label">По убыванию цены</span>
                </label>
                <label className="sort-panel__option">
                    <input
                        type="radio"
                        name="sort"
                        value="year"
                        checked={sortBy === 'year'}
                        onChange={(e) => onSortChange(e.target.value as SortOption)}/>
                    <span className="sort-panel__label">По году</span>
                </label>
                <button className="sort-panel__btn" type="button" onClick={() => onSortChange('')}>Сбросить</button>
            </div>
        </div>
    );
};

export default SortPanel;