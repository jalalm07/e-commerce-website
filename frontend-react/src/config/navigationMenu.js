export const navigation = {
    categories: [
      {
        id: 'clothing',
        name: 'Clothing',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'women',
            name: 'Women',
            items: [
              { name: 'Tops', id:"top", href: `{women/clothing/tops}` },
              { name: 'Dresses', id:"women_dress", href: '#' },
              { name: 'Women Jeans', id: 'women_jeans' },
              /* { name: 'Lengha Choli', id: 'lengha_choli' },
              { name: 'Sweaters', id: 'sweater' },
              { name: 'T-Shirts', id: 't-shirts' },
              { name: 'Jackets', id: 'jacket' },
              { name: 'Gouns', id: 'gouns' },
              { name: 'Sarees', id: 'saree' },
              { name: 'Kurtas', id: 'kurtas' }, */
            ],
          },
          {
            id: 'men',
            name: 'Men',
            items: [
              { name: 'T-shirts', id: 't-shirts' },
              { name: 'Jeans', id: 'men_jeans' },
              { name: 'Shirts', id: 'shirts' },
            ],
          },
          {
            id: 'kids',
            name: 'Kids',
            items: [
              { name: 'New Born', id: 'new-born' },
              { name: 'Dresses', id: 'dresses' },
              { name: 'Tops', id: 'tops' },
            ],
          },
        ],
      },
      {
        id: 'books',
        name: 'Books',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/61ECOUEnoTL.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Bestsellers',
            id: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/91n7p-j5aqL._SL1500_.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'history',
            name: 'History',
            items: [
              { name: 'Ancient', id: 'ancient' },
              { name: 'Medieval', id: 'medieval' },
              { name: 'Renaissance', id: 'renaissance' },   
            ],
          },
          {
            id: 'computer',
            name: 'Computer & Technology',
            items: [
              { name: 'Networking & Cloud Computing', id: 'networks' },
              { name: 'Computer Security & Encryption', id: 'security' },
              { name: 'Computer Programming', id: 'programming' },
            ],
          },
          {
            id: 'fiction',
            name: 'Literature & Fiction',
            items: [
              { name: 'Literary Fiction', id: 'literary' },
              { name: 'Action & Adventure Fiction', id: 'action' },
              { name: 'American Literature', id: 'american' },
              { name: 'Contemporary Literature & Fiction', id: 'contemporary' },
            ],
          },
        ],
      },
      {
        id: 'electronics',
        name: 'Electronics',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/71HtN4qqLZL._AC_SL1500_.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/716b+5ZKQpL._AC_SL1500_.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'television',
            name: 'Television & Video',
            items: [
              { name: 'Televisions', id: 'tv' },
              { name: 'Home Audio Sound Bars', id: 'sound' },
              { name: 'Projectors', id: 'projectors' },   
            ],
          },
          {
            id: 'phones',
            name: 'Cell Phones & Accessories',
            items: [
              { name: 'Mobile Phones', id: 'mobile' },
              { name: 'Headphones', id: 'headphones' },
              { name: 'Charges and Cables', id: 'cables' },
            ],
          },
          {
            id: 'camera',
            name: 'Camera & Photo',
            items: [
              { name: 'Camera', id: 'photo' },
              { name: 'Camcorders', id: 'camcorders' },
              { name: 'Binoculars, Telescopes & Optics', id: 'binoculars' },
              { name: 'Tripods & Monopods', id: 'tripods' },
            ],
          },
        ],
      },
    ],
  }