export const categories = [
  { name: "Crafts", slug: "crafts", tone: "craft", image: "photo-1493106641515-6b5631de4bb9", note: "Woven by hand" },
  { name: "Farm & produce", slug: "farm-produce", tone: "produce", image: "photo-1546549032-9571cd6b27df", note: "Grown with care" },
  { name: "Textiles", slug: "textiles", tone: "textile", image: "photo-1605000797499-95a51c5269ae", note: "Colour with a story" },
  { name: "Pottery & ceramics", slug: "pottery-ceramics", tone: "pottery", image: "photo-1578749556568-bc2c40e68b61", note: "Shaped in clay" },
  { name: "Home & decor", slug: "home-decor", tone: "decor", image: "photo-1493663284031-b7e3aefcae8e", note: "Made for living" },
  { name: "Jewellery", slug: "jewellery", tone: "jewellery", image: "photo-1611652022419-a9419f74343d", note: "A little keepsake" },
  { name: "Coffee & tea", slug: "coffee-tea", tone: "coffee", image: "photo-1447933601403-0c6688de566e", note: "From Kenyan highlands" },
  { name: "Beauty & wellness", slug: "beauty-wellness", tone: "beauty", image: "photo-1608248543803-ba4f8c70ae0b", note: "Rooted in nature" },
  { name: "Art & prints", slug: "art-prints", tone: "paper", image: "photo-1579783902614-a3fb3927b6a5", note: "Made to keep" },
] as const;

export type CategoryName = (typeof categories)[number]["name"];

export interface Maker {
  id: string;
  name: string;
  region: string;
  craft: string;
  portrait: string;
  quote: string;
  business: boolean;
  note: string;
}

export const makers: Maker[] = [
  { id: "wanjiru-kamau", name: "Wanjiru Kamau", region: "Murang’a, Kenya", craft: "Potter & ceramicist", portrait: "photo-1534528741775-53994a69daeb", quote: "Every vessel carries a little piece of home.", business: false, note: "Wanjiru learned to read clay from her grandmother. Her bowls are made slowly, shaped by hand and fired beneath the Kikuyu hills." },
  { id: "aisha-otieno", name: "Aisha Otieno", region: "Mombasa, Kenya", craft: "Textile artist", portrait: "photo-1531123897727-8f129e1688ce", quote: "I want every colour to make you feel something.", business: false, note: "Aisha pairs the rhythm of the coast with bold, hand-printed cotton. Her workshop is a few streets from the Indian Ocean." },
  { id: "kiriaga-coffee", name: "Kirinyaga Coffee Cooperative", region: "Kirinyaga, Kenya", craft: "Family-grown coffee", portrait: "photo-1460661419201-fd4cecdf8a8b", quote: "Our morning is in every cup.", business: true, note: "A community of smallholder farmers who pick ripe red cherries by hand on the slopes of Mount Kenya." },
  { id: "baraka-mwinyi", name: "Baraka Mwinyi", region: "Nairobi, Kenya", craft: "Basket weaver", portrait: "photo-1506794778202-cad84cf45f1d", quote: "The pattern remembers the hands that made it.", business: false, note: "Baraka weaves sisal into useful, everyday shapes, using techniques passed between generations in his family." },
  { id: "machakos-clay", name: "Machakos Clay Collective", region: "Machakos, Kenya", craft: "Community pottery studio", portrait: "photo-1524504388940-b1c1722653e1", quote: "Good work is even better when it is shared.", business: true, note: "A worker-owned pottery workshop turning local clay into kitchenware, one carefully finished piece at a time." },
  { id: "neema-njoroge", name: "Neema Njoroge", region: "Nakuru, Kenya", craft: "Botanical maker", portrait: "photo-1529139574466-a303027c1d8b", quote: "The best ingredients are the ones growing outside.", business: false, note: "Neema gathers botanicals from family gardens and makes small batches of simple, nourishing body care." },
  { id: "mombasa-kitenge", name: "Mombasa Kitenge House", region: "Mombasa, Kenya", craft: "Coastal textile house", portrait: "photo-1534528741775-53994a69daeb", quote: "Our prints have always been meant to travel.", business: true, note: "A small coastal studio working with local tailors to bring colour and traditional kitenge prints into everyday life." },
  { id: "peter-mburu", name: "Peter Mburu", region: "Kiambu, Kenya", craft: "Woodworker", portrait: "photo-1500648767791-00dcc994a43e", quote: "I look for the shape the wood already has.", business: false, note: "Peter makes practical home pieces from reclaimed wood sourced from his neighbouring farms." },
  { id: "zuri-wanjala", name: "Zuri Wanjala", region: "Kisumu, Kenya", craft: "Bead & jewellery maker", portrait: "photo-1544005313-94ddf0286df2", quote: "Small things can hold a lot of meaning.", business: false, note: "Zuri creates modern beadwork inspired by Lake Victoria and the stories shared by the women in her family." },
  { id: "amani-kibet", name: "Amani Kibet", region: "Eldoret, Kenya", craft: "Illustrator & printmaker", portrait: "photo-1508214751196-bcfd4ca60f91", quote: "I find stories in the everyday.", business: false, note: "Amani's linocut prints start as sketches of street markets, familiar faces, and life in the Rift Valley." },
  { id: "nyambura-gitau", name: "Nyambura Gitau", region: "Embu, Kenya", craft: "Tea grower & blender", portrait: "photo-1508214751196-bcfd4ca60f91", quote: "You can taste the highland rain.", business: false, note: "Nyambura hand-blends estate-grown Kenyan tea with fragrant herbs from her hillside garden." },
  { id: "fatuma-ali", name: "Fatuma Ali", region: "Lamu, Kenya", craft: "Textile & home artist", portrait: "photo-1524504388940-b1c1722653e1", quote: "A home should feel like the people who live in it.", business: false, note: "Fatuma stitches relaxed, colourful home linens inspired by the doors, boats, and old streets of Lamu." },
];

export interface Product {
  id: string;
  name: string;
  category: CategoryName;
  makerId: string;
  price: number;
  weight: string;
  image: string;
  detail: string;
  materials: string;
  sizeCare: string;
  shipsToUk: boolean;
}

export const products: Product[] = [
  { id: "kiln-fired-breakfast-bowl", name: "Kiln-fired breakfast bowl", category: "Pottery & ceramics", makerId: "wanjiru-kamau", price: 34, weight: "0.55 kg", image: "photo-1578749556568-bc2c40e68b61", detail: "Wanjiru turns each bowl slowly on her wheel, finishing the rim by hand. No two emerge quite alike.", materials: "Local red clay, clear food-safe glaze.", sizeCare: "Approx. 14 cm wide. Dishwasher safe; hand washing helps it last.", shipsToUk: true },
  { id: "hand-block-printed-wrap", name: "Indigo block-print wrap", category: "Textiles", makerId: "aisha-otieno", price: 48, weight: "0.28 kg", image: "photo-1605000797499-95a51c5269ae", detail: "Aisha cuts her own block and prints the deep-blue pattern one repeat at a time on soft cotton.", materials: "100% lightweight cotton, plant-based indigo.", sizeCare: "Approx. 180 × 100 cm. Cool wash separately; line dry.", shipsToUk: true },
  { id: "kirinyaga-aa-coffee", name: "Kirinyaga AA coffee · 250g", category: "Coffee & tea", makerId: "kiriaga-coffee", price: 14, weight: "0.3 kg", image: "photo-1447933601403-0c6688de566e", detail: "Picked by hand from small farms on Mount Kenya, with a bright blackcurrant cup and a smooth finish.", materials: "Arabica coffee beans; single-origin, freshly roasted.", sizeCare: "250 g whole bean. Store sealed, away from heat and light.", shipsToUk: true },
  { id: "woven-sisal-market-basket", name: "Woven sisal market basket", category: "Crafts", makerId: "baraka-mwinyi", price: 42, weight: "0.7 kg", image: "photo-1493106641515-6b5631de4bb9", detail: "Baraka and his family weave each sturdy basket by hand using locally grown sisal.", materials: "Natural sisal fibre with a woven cotton handle.", sizeCare: "Approx. 35 × 28 cm. Spot clean gently and air dry.", shipsToUk: true },
  { id: "sculpted-clay-serving-platter", name: "Sculpted clay serving platter", category: "Pottery & ceramics", makerId: "machakos-clay", price: 56, weight: "1.1 kg", image: "photo-1565193298595-6daf1a8fdbfe", detail: "A generous serving platter shaped and finished together at the Machakos community studio.", materials: "Locally sourced stoneware clay, lead-free glaze.", sizeCare: "Approx. 32 cm across. Dishwasher safe.", shipsToUk: true },
  { id: "morning-ritual-body-butter", name: "Morning ritual body butter", category: "Beauty & wellness", makerId: "neema-njoroge", price: 22, weight: "0.24 kg", image: "photo-1608248543803-ba4f8c70ae0b", detail: "Neema's small-batch butter is whipped smooth and made in short runs with ingredients she knows.", materials: "Shea butter, coconut oil, sunflower oil, and essential oils.", sizeCare: "120 ml. Keep cool and dry. Patch test before use.", shipsToUk: true },
  { id: "kitenge-cushion-cover", name: "Kitenge cushion cover", category: "Home & decor", makerId: "mombasa-kitenge", price: 38, weight: "0.22 kg", image: "photo-1493663284031-b7e3aefcae8e", detail: "Cut and stitched by the Mombasa team from lively coastal-print cotton.", materials: "Cotton kitenge. Cushion pad not included.", sizeCare: "Fits a 45 × 45 cm pad. Cool wash inside out.", shipsToUk: true },
  { id: "lake-victoria-bead-studs", name: "Lake Victoria bead studs", category: "Jewellery", makerId: "zuri-wanjala", price: 28, weight: "0.05 kg", image: "photo-1611652022419-a9419f74343d", detail: "Zuri works tiny glass beads into a simple, colourful pair inspired by the light on the lake.", materials: "Glass seed beads and sterling silver posts.", sizeCare: "Approx. 12 mm across. Store dry in the supplied pouch.", shipsToUk: true },
  { id: "reclaimed-mug-tree", name: "Reclaimed-wood mug tree", category: "Home & decor", makerId: "peter-mburu", price: 62, weight: "0.85 kg", image: "photo-1499933374294-4584851497cc", detail: "Peter builds this simple counter-top stand from a single reclaimed piece of farm wood.", materials: "Reclaimed Kenyan hardwood, natural wax finish.", sizeCare: "Approx. 38 cm high. Wipe with a dry cloth.", shipsToUk: true },
  { id: "rift-valley-lino-print", name: "Rift Valley morning print", category: "Art & prints", makerId: "amani-kibet", price: 36, weight: "0.19 kg", image: "photo-1579783902614-a3fb3927b6a5", detail: "Amani carves and prints this small linocut on a hand press in his Eldoret studio.", materials: "Archival paper and water-based inks.", sizeCare: "A4, unframed. Keep out of direct sunlight.", shipsToUk: true },
  { id: "highland-loose-leaf-tea", name: "Embu highland loose-leaf tea", category: "Coffee & tea", makerId: "nyambura-gitau", price: 12, weight: "0.18 kg", image: "photo-1544787219-7f47ccb76574", detail: "A malty, golden cup, blended by Nyambura with a handful of herbs from her hillside.", materials: "Black tea, lemongrass, and fragrant garden herbs.", sizeCare: "70 g. Brew for 3–4 minutes in freshly boiled water.", shipsToUk: true },
  { id: "soft-kitenge-table-runner", name: "Soft kitenge table runner", category: "Textiles", makerId: "fatuma-ali", price: 44, weight: "0.31 kg", image: "photo-1605000797499-95a51c5269ae", detail: "Fatuma cuts and hems each runner by hand, keeping the pattern's most joyful details in view.", materials: "Printed cotton kitenge.", sizeCare: "Approx. 180 × 35 cm. Cool wash with similar colours.", shipsToUk: true },
  { id: "daisy-stamped-clay-cup", name: "Daisy-stamped clay cup", category: "Pottery & ceramics", makerId: "wanjiru-kamau", price: 26, weight: "0.38 kg", image: "photo-1565193298595-6daf1a8fdbfe", detail: "A small stoneware cup with a pressed-flower detail that Wanjiru stamps by hand.", materials: "Stoneware clay and food-safe glaze.", sizeCare: "Approx. 250 ml. Dishwasher safe.", shipsToUk: true },
  { id: "machakos-stoneware-vase", name: "Everyday stoneware vase", category: "Home & decor", makerId: "machakos-clay", price: 72, weight: "1.3 kg", image: "photo-1578749556568-bc2c40e68b61", detail: "The collective's gently curved vase is designed to feel at home with one stem or a full bunch.", materials: "High-fired local stoneware.", sizeCare: "Approx. 24 cm high. Hand wash.", shipsToUk: true },
  { id: "nakuru-shea-hand-salve", name: "Nakuru shea hand salve", category: "Beauty & wellness", makerId: "neema-njoroge", price: 16, weight: "0.12 kg", image: "photo-1556229010-6c3f2c9ca5f8", detail: "A little pocket-sized salve, blended by Neema to leave hardworking hands feeling cared for.", materials: "Shea butter, beeswax, avocado oil, and calendula.", sizeCare: "50 ml. Use a small amount on dry skin.", shipsToUk: true },
  { id: "single-origin-honey", name: "Highland wildflower honey", category: "Farm & produce", makerId: "kiriaga-coffee", price: 18, weight: "0.5 kg", image: "photo-1587049352846-4a222e784d38", detail: "A small harvest of floral Kenyan honey, gathered from hives near the cooperative's coffee farms.", materials: "100% raw, single-origin wildflower honey.", sizeCare: "340 g jar. Never feed honey to infants under 12 months.", shipsToUk: true },
  { id: "rattan-wall-hanging", name: "Round woven wall hanging", category: "Crafts", makerId: "baraka-mwinyi", price: 54, weight: "0.9 kg", image: "photo-1493663284031-b7e3aefcae8e", detail: "A sculptural wall piece Baraka weaves in a flowing spiral from natural sisal.", materials: "Hand-dyed and natural sisal fibre.", sizeCare: "Approx. 42 cm diameter. Avoid prolonged direct sunlight.", shipsToUk: true },
  { id: "coastal-cowrie-pendant", name: "Coastal cowrie pendant", category: "Jewellery", makerId: "zuri-wanjala", price: 46, weight: "0.07 kg", image: "photo-1611652022419-a9419f74343d", detail: "Zuri pairs a locally found cowrie shell with handwoven beads on an adjustable cord.", materials: "Cowrie shell, glass beads, and waxed cotton cord.", sizeCare: "Adjustable 42–50 cm. Remove before swimming.", shipsToUk: true },
  { id: "sunrise-block-print", name: "Mombasa sunrise print", category: "Art & prints", makerId: "amani-kibet", price: 32, weight: "0.16 kg", image: "photo-1579783902614-a3fb3927b6a5", detail: "A small, signed art print from Amani's hand-cut series on the colours of the coast.", materials: "Archival matte paper, water-based inks.", sizeCare: "A4, unframed. Ships flat with a protective board.", shipsToUk: true },
  { id: "kitenge-cotton-scarf", name: "Mombasa cotton scarf", category: "Textiles", makerId: "mombasa-kitenge", price: 39, weight: "0.23 kg", image: "photo-1605000797499-95a51c5269ae", detail: "Cut from a distinctive small run of kitenge, chosen by the team at their Mombasa workshop.", materials: "Lightweight printed cotton.", sizeCare: "Approx. 175 × 70 cm. Cool hand wash.", shipsToUk: true },
  { id: "kiambu-oak-serving-board", name: "Kiambu oak serving board", category: "Crafts", makerId: "peter-mburu", price: 58, weight: "0.95 kg", image: "photo-1604578762246-41134e37f9cc", detail: "Peter selects each offcut for its grain, turning a useful remnant into a handsome serving board.", materials: "Reclaimed Kenyan hardwood, food-safe oil.", sizeCare: "Approx. 40 × 18 cm. Hand wash and oil occasionally.", shipsToUk: true },
  { id: "hand-dyed-linen-napkins", name: "Hand-dyed linen napkins · pair", category: "Home & decor", makerId: "fatuma-ali", price: 35, weight: "0.2 kg", image: "photo-1600607687939-ce8a6c25118c", detail: "Fatuma dyes and finishes this easy, everyday pair in the relaxed colours of the coast.", materials: "Linen-cotton blend, naturally dyed.", sizeCare: "Two 40 × 40 cm napkins. Machine wash cool.", shipsToUk: true },
  { id: "kirinyaga-peaberry-reserve", name: "Kirinyaga peaberry reserve", category: "Coffee & tea", makerId: "kiriaga-coffee", price: 24, weight: "0.3 kg", image: "photo-1447933601403-0c6688de566e", detail: "A carefully separated lot of peaberries, roasted to reveal their gentle caramel sweetness.", materials: "100% Arabica, hand-sorted whole beans.", sizeCare: "250 g. Roasted in small batches; best within six weeks.", shipsToUk: true },
  { id: "hand-carved-wooden-bowl", name: "Hand-carved serving bowl", category: "Home & decor", makerId: "peter-mburu", price: 120, weight: "1.5 kg", image: "photo-1499933374294-4584851497cc", detail: "A one-off, deeply grained centrepiece carved slowly by Peter from salvaged hardwood.", materials: "Single piece reclaimed hardwood; beeswax and natural oil finish.", sizeCare: "Approx. 34 cm wide. Wipe clean; not for dishwasher use.", shipsToUk: true },
] as const satisfies readonly Product[];

export const makerFor = (makerId: string) => makers.find((maker) => maker.id === makerId);
export const productFor = (productId: string) => products.find((product) => product.id === productId);
export const photoUrl = (photoId: string, width = 720) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=82`;
export const gbp = (amount: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 2 }).format(amount);