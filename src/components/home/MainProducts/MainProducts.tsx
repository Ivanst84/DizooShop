import { getMainProducts } from 'app/services/shopify/products';
import Image from 'next/image';
import styles from './MainProducts.module.sass';

export const MainProducts = async () => {
  try {
    const products = await getMainProducts();

    // Imprime los productos en la consola para verificar
    console.log('Productos:', products);

    return (
      <section className={styles.MainProducts}>
        <h3>✨ New products released!</h3>
        <div className={styles.MainProducts__grid}>
            {products?.map((product: any) => {
            const imageSrc = product.images[0].src;
            return (
              <article key={product.id}>
                <p>{product.title}</p>
                <Image src={imageSrc} fill alt={product.title} loading="eager" />
              </article>
            );
          })}
        </div>
      </section>
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    // Puedes manejar el error de alguna manera si lo deseas
    return <div>Error al cargar productos</div>;
  }
};