interface GalleryImage {
  title: string
  image: string
}

const galleryImages: GalleryImage[] = [
  {
    title: 'Classrooms',
    image:
      'https://images.unsplash.com/photo-1427504494785-cdbe172e6b8e?w=400&h=300&fit=crop',
  },
  {
    title: 'Computer Labs',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
  },
  {
    title: 'Students',
    image:
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop',
  },
  {
    title: 'Graduation Ceremony',
    image:
      'https://images.unsplash.com/photo-1536992412-2d66e9f43e0d?w=400&h=300&fit=crop',
  },
  {
    title: 'Campus Life',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
  },
  {
    title: 'Outdoor Activities',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-xl text-gray-600">
            Explore our campus and college life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
