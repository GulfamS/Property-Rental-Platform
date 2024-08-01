import React from "react"

const CartContext = React.createContext({
    cartList: [
        {
            "id": 1,
            "title": "Cozy Downtown Apartment",
            "description": "A charming 2-bedroom apartment located in the heart of downtown, featuring modern amenities and easy access to shops and restaurants.",
            "price": 1200,
            "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/457072773.jpg?k=05361797cb76ee598c24ceca6a4a898cf8b41b6be0c5d22e11eaeea0599fde6d&o=&hp=1",
            "quantity": 1
        },
          {
            "id": 2,
            "title": "Spacious Suburban Home",
            "description": "A beautiful 4-bedroom house in a quiet suburban neighborhood, perfect for families. Includes a large backyard and garage.",
            "price": 2000,
            "imageUrl": "https://media.istockphoto.com/id/1281180946/photo/beautiful-luxury-home.jpg?s=612x612&w=0&k=20&c=q7UqFVPb72JGIJ6A79H9BDtXFCKGFYKpmW64hxw6vRY=",
            "quantity": 1
          },
          {
            "id": 3,
            "title": "Luxury City Loft",
            "description": "An upscale loft with stunning city views, high ceilings, and designer furnishings. Ideal for professionals seeking a stylish living space.",
            "price": 3000,
            "imageUrl": "https://images.adsttc.com/media/images/5723/5175/e58e/ce92/0000/0019/large_jpg/BJP_5434.jpg?1461932391",
            "quantity": 1
          },
          {
              "id": 4,
              "title": "Beachfront Cottage",
              "description": "A delightful 3-bedroom cottage right on the beach, offering breathtaking ocean views and private beach access.",
              "price": 2500,
              "imageUrl": "https://assets.traveltriangle.com/blog/wp-content/uploads/2014/11/Urbanspa1-698x456.jpg",
              "quantity": 1
            },
            {
              "id": 5,
              "title": "Modern Studio",
              "description": "A sleek and modern studio apartment with all the essentials. Conveniently located near public transportation and local hotspots.",
              "price": 800,
              "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/473216419.jpg?k=34a39dda9a420b603e9aff53eb47c3e17110ef2ea14c20f4a72f62311081136f&o=&hp=1",
              "quantity": 1
            },
            {
              "id": 6,
              "title": "Historic Townhouse",
              "description": "A charming 3-bedroom townhouse with vintage details and modern updates, situated in a historic district.",
              "price": 1800,
              "imageUrl": "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/at%2Freal-estate%2Fcolorful-old-victorian-house",
              "quantity": 1
            },
            {
              "id": 7,
              "title": "Mountain Cabin",
              "description": "A rustic 2-bedroom cabin nestled in the mountains, perfect for a peaceful retreat. Features a fireplace and stunning nature views.",
              "price": 1500,
              "imageUrl": "https://img.freepik.com/premium-photo/secluded-cabin-nestled-mountains-surrounded-by-lush-greenery-tranquil-river-with-its-rustic-charm-stunning-views_14117-349680.jpg",
              "quantity": 1
            },
            {
              "id": 8,
              "title": "Urban Condo",
              "description": "A contemporary 1-bedroom condo in a vibrant city neighborhood, featuring a fitness center and rooftop terrace.",
              "price": 1200,
              "imageUrl": "https://www.related.com/sites/default/files/styles/2x1_horizontal_rectangle_w/public/2024-01/acquiadam-assets/related-corporate-homepage-hero-2023-05-10-colinmiller-cortland-8086.jpg?itok=In0TpvOH",
              "quantity": 1
            },
            {
              "id": 9,
              "title": "Family-Friendly Duplex",
              "description": "A spacious 3-bedroom duplex with a fenced yard and close proximity to schools and parks. Ideal for families.",
              "price": 2200,
              "imageUrl": "https://images.homes.com/listings/215/8366355683-275918771/405-wallace-ave-indianapolis-in-primaryphoto.jpg",
              "quantity": 1
            },
            {
              "id": 10,
              "title": "Luxury Penthouse",
              "description": "An exquisite penthouse with panoramic city views, private elevator access, and top-of-the-line finishes.",
              "price": 5000,
              "imageUrl": "https://images.timesproperty.com/blog/5069/penthouses.jpg",
              "quantity": 1
            }
    ],
    addCartItem: {},
    deleteCartItem: {}
})

export default CartContext