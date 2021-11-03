import Link from 'next/link';
import styles from '../styles/ItemsGrid.module.sass';

const ItemsGrid = () => {

   const items = [
      { title: 'Tierra', artist: 'L’Arc~en~Ciel', img: '/images/example_cover.jpg', slug: 'larc-tierra' },
      { title: 'BUGRIGHT', artist: 'UVERworld', img: '/images/example_cover.jpg', slug: 'uverworld-bugright' },
      { title: 'Airo Music', artist: 'Indigo la end', img: '/images/example_cover.jpg', slug: 'indigolaend-airomusic' },
      { title: 'Ray', artist: 'L’Arc~en~Ciel', img: '/images/example_cover.jpg', slug: 'larc-ray' },
      { title: 'LUNA SEA', artist: 'LUNA SEA', img: '/images/example_cover.jpg', slug: 'lunasea' },
      { title: 'Daruma Ringo', artist: 'gesu no kiwami otome.', img: '/images/example_cover.jpg', slug: 'gesunokiwami-darumaringo' },
      { title: 'Sparkle', artist: 'iri', img: '/images/example_cover.jpg', slug: 'iri-sparkle' },
      { title: 'In the Direction of Sunrise and Night Light', artist: 'deadman', img: '/images/example_cover.jpg', slug: 'deadman-indirection' },
    ];  
   
   return (
      <div className={styles.itemsGrid}>
         {items.map((item, i) => (
            <Link href={item.slug} key={i}>            
               <a className={styles.item}>
                  <div className={styles.img} style={{backgroundImage: 'url(' + item.img + ')'}}>
                  </div>
                  <div className={styles.data}>
                     <h3>{item.title}</h3>
                     <p>{item.artist}</p>
                  </div>
               </a>
            </Link>
         ))}
      </div>
   )
}

export default ItemsGrid;