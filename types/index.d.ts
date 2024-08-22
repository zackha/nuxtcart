interface Products {
  slug: string;
  id: string;
  name: string;
}

interface SizeNode {
  name: string;
  id: string;
}

interface AllPaSize {
  nodes: SizeNode[];
}

interface Product {
  id: string;
  name: string;
  allPaSize: AllPaSize;
}
