import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

interface CategorySectionProps {
  id: string;
  title: string;
  products: Array<{
    id: number;
    title: string;
    price: string;
    image: string;
    category: string;
  }>;
}

export default function CategorySection({ id, title, products }: CategorySectionProps) {
  return (
    <section id={id} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white mb-8">{title}</h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}