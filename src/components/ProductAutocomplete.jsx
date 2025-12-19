import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { localStorageService } from "@/lib/localStorage";

export default function ProductAutocomplete({ value, onChange, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const products = localStorageService.getProducts();
    setAllProducts(products);
  }, []);

  useEffect(() => {
    if (value.trim() === "") {
      setFilteredProducts([]);
      setIsOpen(false);
      return;
    }

    const filtered = allProducts.filter((product) =>
      product.nome.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
    setIsOpen(filtered.length > 0);
  }, [value, allProducts]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (product) => {
    onChange({ target: { name: "produto", value: product.nome } });
    onSelect?.(product);
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <Input
        type="text"
        name="produto"
        value={value}
        onChange={(e) => onChange(e)}
        placeholder="Digite o nome do produto"
        className="bg-card border-0 rounded-lg p-3 h-12 text-base placeholder:text-muted-foreground"
        data-testid="input-produto-autocomplete"
        autoComplete="off"
      />

      {isOpen && filteredProducts.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-1 max-h-48 overflow-y-auto z-50 border shadow-lg">
          {filteredProducts.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => handleSelect(product)}
              className="w-full text-left px-3 py-2 hover:bg-accent cursor-pointer border-b last:border-b-0 transition-colors"
              data-testid={`autocomplete-item-${product.id}`}
            >
              <div className="font-medium">{product.nome}</div>
              <div className="text-sm text-muted-foreground">
                Estoque: {product.quantidade || 0} un.
              </div>
            </button>
          ))}
        </Card>
      )}
    </div>
  );
}
