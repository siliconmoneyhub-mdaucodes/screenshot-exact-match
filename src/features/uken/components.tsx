import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useStore, roles } from "./context";
import { categories, gbp, makerFor, photoUrl, type Maker, type Product } from "./data";

export const categoryClass: Record<string, string> = {
  Crafts: "category-craft",
  "Farm & produce": "category-produce",
  Textiles: "category-textile",
  "Pottery & ceramics": "category-pottery",
  "Home & decor": "category-decor",
  Jewellery: "category-jewellery",
  "Coffee & tea": "category-coffee",
  "Beauty & wellness": "category-beauty",
  "Art & prints": "category-paper",
};

export function ProductCard({ product }: { product: Product }) {
  const { saved, toggleSaved, addToBag } = useStore();
  const maker = makerFor(product.makerId);
  if (!maker) return null;
  const isSaved = saved.includes(product.id);
  const toProduct = { to: "/products/$id" as const, params: { id: product.id } };

  return (
    <article className="uken-product-card group">
      <div className="relative aspect-square overflow-hidden">
        <Link {...toProduct} aria-label={`View ${product.name}`} className="absolute inset-0">
          <img src={photoUrl(product.image, 600)} alt={product.name} width={600} height={600} loading="lazy" className="uken-photo transition-transform duration-500 group-hover:scale-[1.035]" />
        </Link>
        <span className={`uken-category-chip ${categoryClass[product.category]} absolute left-3 top-3 max-w-[calc(100%-4.5rem)] truncate rounded-sm px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.08em]`}>
          {product.category}
        </span>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={isSaved ? `Remove ${product.name} from saved items` : `Save ${product.name}`}
          onClick={() => toggleSaved(product.id)}
          className="absolute right-3 top-3 size-9 rounded-full border border-border bg-background/90 shadow-none hover:bg-card"
        >
          <Heart className={isSaved ? "size-4 fill-category-beauty text-category-beauty" : "size-4"} />
        </Button>
      </div>
      <div className="flex flex-1 flex-col p-3.5 sm:p-4">
        <Link {...toProduct} className="font-display min-h-12 text-[1.28rem] leading-tight text-foreground sm:text-[1.42rem]">
          {product.name}
        </Link>
        <div className="mt-1.5 font-semibold text-foreground">{gbp(product.price)}</div>
        <Link to="/makers/$id" params={{ id: maker.id }} className="mt-3 flex min-h-9 items-center gap-2 border-t border-border pt-3 text-xs text-uken-muted hover:text-foreground">
          <img src={photoUrl(maker.portrait, 96)} alt={`${maker.name}`} width={30} height={30} loading="lazy" className="size-[1.9rem] shrink-0 rounded-full object-cover" />
          <span className="min-w-0 truncate">by <span className="font-medium text-foreground">{maker.name}</span> <span className="hidden min-[430px]:inline">· {maker.region.split(",")[0]}</span></span>
        </Link>
        <Button type="button" onClick={() => addToBag(product.id)} className="mt-3 h-10 w-full rounded-sm font-medium">
          <ShoppingBag className="size-4" /> Add to bag
        </Button>
      </div>
    </article>
  );
}

export function ProductGrid({ items }: { items: Product[] }) {
  return <div className="grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-4">{items.map((product) => <ProductCard key={product.id} product={product} />)}</div>;
}

export function MakerCard({ maker }: { maker: Maker }) {
  const firstProduct = (makerId: string) => makerId;
  return (
    <Link to="/makers/$id" params={{ id: firstProduct(maker.id) }} className="group flex min-w-0 flex-col">
      <div className="aspect-[0.92] overflow-hidden bg-uken-cream">
        <img src={photoUrl(maker.portrait, 600)} alt={maker.name} width={600} height={652} loading="lazy" className="uken-photo transition-transform duration-500 group-hover:scale-[1.035]" />
      </div>
      <div className="pt-3">
        <p className="font-display text-[1.42rem] leading-tight">{maker.name}</p>
        <p className="mt-1 text-sm text-uken-muted">{maker.craft} <span aria-hidden="true">·</span> {maker.region}</p>
        <p className="mt-2 line-clamp-2 text-sm italic text-uken-muted">“{maker.quote}”</p>
      </div>
    </Link>
  );
}

export function SectionHeading({ eyebrow, title, linkTo, linkText }: { eyebrow?: string; title: string; linkTo?: "/shop" | "/makers"; linkText?: string }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
      <div>
        {eyebrow ? <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-uken-terracotta">{eyebrow}</p> : null}
        <h2 className="font-display mt-1 text-[2rem] leading-none sm:text-[2.7rem]">{title}</h2>
      </div>
      {linkTo && linkText ? <Link to={linkTo} className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium hover:text-uken-clay">{linkText}<ArrowRight className="size-4" /></Link> : null}
    </div>
  );
}

export function StorefrontHeader() {
  const { role, setRole, bagCount, saved, setSearchTerm } = useStore();
  const [searchOpen, setSearchOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const isGuest = role === "guest";
  const activeRole = roles.find((entry) => entry.id === role)?.label ?? "Guest";

  const goSell = () => {
    setRole("maker-review");
    navigate({ to: "/account" });
  };

  const submitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchTerm(search);
    setSearchOpen(false);
    navigate({ to: "/shop" });
  };

  return (
    <>
      <aside className="uken-demo-bar sticky top-0 z-40 flex min-h-11 items-center gap-3 bg-foreground px-4 text-background sm:gap-4 sm:px-6">
        <span className="shrink-0 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-background/70">Mockup</span>
        <span className="hidden shrink-0 text-xs text-background/70 sm:inline">View as:</span>
        <div className="demo-role-scroll flex min-w-0 flex-1 items-center gap-1 overflow-x-auto py-1">
          {roles.map((entry) => (
            <button
              key={entry.id}
              type="button"
              aria-pressed={role === entry.id}
              onClick={() => {
                setRole(entry.id);
                if (entry.id === "guest") navigate({ to: "/" });
                else navigate({ to: "/account" });
              }}
              className={`shrink-0 whitespace-nowrap rounded-sm px-2.5 py-1.5 text-[0.68rem] transition-colors ${role === entry.id ? "bg-background font-semibold text-foreground" : "text-background/75 hover:bg-background/10 hover:text-background"}`}
            >{entry.label}</button>
          ))}
        </div>
        <span className="hidden shrink-0 items-center gap-1.5 text-[0.65rem] text-background/55 xl:inline"><Check className="size-3" /> Front-end preview</span>
      </aside>

      <header className="relative z-30 border-b border-border bg-background">
        <div className="uken-section flex h-[4.5rem] items-center justify-between gap-4 sm:h-[5.2rem]">
          <Link to="/" aria-label="UKEN home" className="font-display text-[2.55rem] font-semibold leading-none tracking-[0.02em] text-foreground sm:text-[3rem]">UKEN</Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            <div className="group relative">
              <Link to="/shop" className="inline-flex items-center gap-1 py-5 text-sm font-medium hover:text-uken-clay">Shop <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" /></Link>
              <div className="invisible absolute left-0 top-full z-50 grid w-[30rem] grid-cols-2 border border-border bg-background p-3 opacity-0 shadow-sm transition-all group-hover:visible group-hover:opacity-100">
                {categories.map((category) => <Link key={category.slug} to="/shop" onClick={() => useStoreCategory(category.name, setSearchTerm)} className="px-3 py-2.5 text-sm hover:bg-card">{category.name}</Link>)}
              </div>
            </div>
            <Link to="/makers" className="py-5 text-sm font-medium hover:text-uken-clay">Makers</Link>
            <Link to="/our-story" className="py-5 text-sm font-medium hover:text-uken-clay">Our story</Link>
          </nav>
          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <Button variant="ghost" size="icon" aria-label={searchOpen ? "Close search" : "Search"} onClick={() => setSearchOpen(!searchOpen)} className="size-9 rounded-full"><Search className="size-[1.15rem]" /></Button>
            <Link to="/saved" aria-label={`Saved items${saved.length ? `, ${saved.length}` : ""}`} className="relative inline-flex size-9 items-center justify-center rounded-full hover:bg-card"><Heart className="size-[1.15rem]" />{saved.length ? <span className="absolute right-0 top-0 flex size-4 items-center justify-center rounded-full bg-uken-terracotta text-[0.6rem] font-semibold text-primary-foreground">{saved.length}</span> : null}</Link>
            <Link to="/bag" aria-label={`Shopping bag${bagCount ? `, ${bagCount} items` : ""}`} className="relative inline-flex size-9 items-center justify-center rounded-full hover:bg-card"><ShoppingBag className="size-[1.15rem]" />{bagCount ? <span className="absolute right-0 top-0 flex size-4 items-center justify-center rounded-full bg-primary text-[0.6rem] font-semibold text-primary-foreground">{bagCount}</span> : null}</Link>
            {isGuest ? <>
              <Button variant="ghost" onClick={() => setSignInOpen(true)} className="hidden h-9 px-2 text-sm sm:inline-flex">Sign in</Button>
              <Button variant="outline" onClick={goSell} className="hidden h-9 whitespace-nowrap rounded-full border-uken-terracotta px-3 text-xs font-semibold text-uken-clay hover:bg-uken-cream sm:inline-flex">Sell on UKEN</Button>
            </> : <Link to="/account" className="hidden max-w-36 truncate rounded-full border border-border px-3 py-2 text-xs font-medium hover:bg-card sm:inline-flex">{activeRole}</Link>}
            <details className="group relative lg:hidden">
              <summary aria-label="Open menu" className="flex size-9 cursor-pointer list-none items-center justify-center rounded-full hover:bg-card"><Menu className="size-5" /></summary>
              <div className="absolute right-0 top-full z-50 mt-2 w-52 border border-border bg-background p-2 shadow-sm">
                <Link to="/shop" className="block px-3 py-2.5 text-sm hover:bg-card">Shop all</Link>
                <Link to="/makers" className="block px-3 py-2.5 text-sm hover:bg-card">Makers</Link>
                <Link to="/our-story" className="block px-3 py-2.5 text-sm hover:bg-card">Our story</Link>
                {isGuest ? <><button type="button" onClick={() => setSignInOpen(true)} className="block w-full px-3 py-2.5 text-left text-sm hover:bg-card">Sign in</button><button type="button" onClick={goSell} className="block w-full px-3 py-2.5 text-left text-sm hover:bg-card">Sell on UKEN</button></> : <Link to="/account" className="block px-3 py-2.5 text-sm hover:bg-card">{activeRole} dashboard</Link>}
              </div>
            </details>
          </div>
        </div>
        {searchOpen ? <form onSubmit={submitSearch} className="uken-section flex max-w-2xl items-center gap-2 pb-4"><Search className="size-4 shrink-0 text-uken-muted" /><Input autoFocus aria-label="Search the collection" placeholder="Try pottery, coffee, or a maker’s name" value={search} onChange={(event) => setSearch(event.target.value)} className="rounded-none border-x-0 border-t-0 bg-transparent px-0 shadow-none focus-visible:ring-0" /><Button type="submit" size="sm" className="rounded-sm">Search</Button></form> : null}
      </header>
      <Dialog open={signInOpen} onOpenChange={setSignInOpen}>
        <DialogContent className="border-border bg-background sm:max-w-md">
          <DialogHeader><DialogTitle className="font-display text-3xl">Welcome back</DialogTitle><DialogDescription>Sign-in is not connected in this front-end preview.</DialogDescription></DialogHeader>
          <Button onClick={() => { setSignInOpen(false); navigate({ to: "/account" }); }} className="rounded-sm">Explore your sample account</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

function useStoreCategory(category: string, resetSearch: (value: string) => void) {
  void category;
  resetSearch("");
}

export function StorefrontFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-uken-cream sm:mt-24">
      <div className="uken-section grid gap-9 py-10 sm:grid-cols-2 sm:py-14 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
        <div className="sm:col-span-2 lg:col-span-1"><Link to="/" className="font-display text-4xl font-semibold">UKEN</Link><p className="mt-3 max-w-xs text-sm text-uken-muted">Good things, made by people you can name.</p><p className="mt-5 text-xs text-uken-muted">Made with care, from East Africa to the UK.</p></div>
        <div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em]">Shop</p><Link to="/shop" className="block py-1.5 text-sm text-uken-muted hover:text-foreground">All products</Link><Link to="/makers" className="block py-1.5 text-sm text-uken-muted hover:text-foreground">Meet the makers</Link></div>
        <div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em]">Sell</p><Link to="/account" className="block py-1.5 text-sm text-uken-muted hover:text-foreground">Start selling</Link><Link to="/account" className="block py-1.5 text-sm text-uken-muted hover:text-foreground">Business buyers</Link></div>
        <div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em]">Help</p><Link to="/our-story" className="block py-1.5 text-sm text-uken-muted hover:text-foreground">Shipping & delivery</Link><Link to="/our-story" className="block py-1.5 text-sm text-uken-muted hover:text-foreground">FAQs</Link></div>
        <div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em]">About</p><Link to="/our-story" className="block py-1.5 text-sm text-uken-muted hover:text-foreground">Our story</Link><Link to="/makers" className="block py-1.5 text-sm text-uken-muted hover:text-foreground">Our community</Link></div>
      </div>
      <div className="border-t border-border"><div className="uken-section flex flex-col justify-between gap-2 py-4 text-xs text-uken-muted sm:flex-row"><span>© 2026 UKEN. A meeting place for good things.</span><span>Thoughtfully made. Always maker named.</span></div></div>
    </footer>
  );
}

export function StorefrontLayout({ children }: { children: React.ReactNode }) {
  return <><StorefrontHeader /><main>{children}</main><StorefrontFooter /></>;
}

export function MakerPortrait({ maker, size = "large" }: { maker: Maker; size?: "large" | "small" }) {
  const dimension = size === "large" ? 86 : 50;
  return <img src={photoUrl(maker.portrait, dimension * 2)} alt={`${maker.name}`} width={dimension} height={dimension} className={`${size === "large" ? "size-[5.4rem]" : "size-[3.1rem]"} shrink-0 rounded-full object-cover ring-1 ring-border`} />;
}

export function ReturnLink({ to, children }: { to: "/shop" | "/makers"; children: React.ReactNode }) {
  return <Link to={to} className="mb-5 inline-flex items-center gap-2 text-sm text-uken-muted hover:text-foreground"><ArrowDownRight className="size-4 rotate-[135deg]" />{children}</Link>;
}

export function CloseIcon() {
  return <X className="size-4" />;
}