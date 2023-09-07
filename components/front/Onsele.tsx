import { getCollectionProducts } from 'lib/shopify';
import Grid from 'components/grid'; // Is this being used?
import ProductGridItems from 'components/layout/product-grid-items'; // Is this being used?
export async function Onsele() {
  const products = await getCollectionProducts({ collection: 'hidden-On-Sale-T-Shirts' });
  if (!products?.length) return null;
  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 4) {
    groupedProducts.push(products.slice(i, i + 4));
  }
  return (
    <div className=" overflow-x-auto pb-6 pt-1 m-2 min-h-full">
      <div className="text-center">
        <h1 className="font-normal mb-1">SUMMER COLLECTION</h1>
        <h1 className="font-bold text-4xl mb-4">On Sale T-Shirts</h1>
      </div>
      <div className="">
                <Grid className=" grid-cols-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  <ProductGridItems products={products} />
                </Grid>
          </div>
      </div>
  );
}