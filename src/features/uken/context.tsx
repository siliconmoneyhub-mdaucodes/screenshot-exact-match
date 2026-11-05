import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { products } from "./data";

export const roles = [
  { id: "guest", label: "Guest", destination: "/" },
  { id: "buyer", label: "Buyer", destination: "/account" },
  { id: "business-buyer", label: "Business buyer", destination: "/account" },
  { id: "maker-review", label: "Maker (under review)", destination: "/account" },
  { id: "maker-live", label: "Maker (live)", destination: "/account" },
  { id: "business-maker", label: "Business maker", destination: "/account" },
  { id: "admin", label: "Admin", destination: "/account" },
] as const;

export type RoleId = (typeof roles)[number]["id"];
export type Bag = Record<string, number>;

interface StoreContextValue {
  role: RoleId;
  setRole: (role: RoleId) => void;
  bag: Bag;
  addToBag: (productId: string, quantity?: number) => void;
  setBagQuantity: (productId: string, quantity: number) => void;
  saved: string[];
  toggleSaved: (productId: string) => void;
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
  searchTerm: string;
  setSearchTerm: (search: string) => void;
  savedOnly: boolean;
  setSavedOnly: (only: boolean) => void;
  bagCount: number;
  bagTotal: number;
}

const StoreContext = createContext<StoreContextValue | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<RoleId>("guest");
  const [bag, setBag] = useState<Bag>({});
  const [saved, setSaved] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [savedOnly, setSavedOnly] = useState(false);

  const value = useMemo<StoreContextValue>(() => {
    const addToBag = (productId: string, quantity = 1) => {
      if (!products.some((product) => product.id === productId) || !Number.isFinite(quantity) || quantity < 1) return;
      setBag((current) => ({ ...current, [productId]: (current[productId] ?? 0) + quantity }));
    };
    const setBagQuantity = (productId: string, quantity: number) => {
      setBag((current) => {
        if (!(productId in current)) return current;
        if (quantity < 1) {
          const next = { ...current };
          delete next[productId];
          return next;
        }
        return { ...current, [productId]: quantity };
      });
    };
    const toggleSaved = (productId: string) => {
      setSaved((current) =>
        current.includes(productId)
          ? current.filter((savedProduct) => savedProduct !== productId)
          : [...current, productId],
      );
    };

    return {
      role,
      setRole,
      bag,
      addToBag,
      setBagQuantity,
      saved,
      toggleSaved,
      categoryFilter,
      setCategoryFilter,
      searchTerm,
      setSearchTerm,
      savedOnly,
      setSavedOnly,
      bagCount: Object.values(bag).reduce((sum, quantity) => sum + quantity, 0),
      bagTotal: Object.entries(bag).reduce((sum, [productId, quantity]) => {
        const product = products.find((entry) => entry.id === productId);
        return sum + (product?.price ?? 0) * quantity;
      }, 0),
    };
  }, [role, bag, saved, categoryFilter, searchTerm, savedOnly]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("The UKEN mockup must be rendered inside DemoProvider.");
  return context;
}