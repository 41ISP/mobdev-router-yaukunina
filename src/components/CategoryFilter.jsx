import { categories } from "../data/products";
import { useSearchParams } from "react-router-dom";
//import {  } from "module";

export default function CategoryFilter() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get("q") || ""
  const handleSelect = (id) => {
    setSearchParams(id ? {category: id} : {})
  }

  return (
    <div className="filter-row">
      {categories.map(cat => (
        <button
          key={cat.id || 'all'}
          type="button"
          className={'filter-chip' + (cat.id === activeCategory ? ' active' : '')}
          onClick={() => handleSelect(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
