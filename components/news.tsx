import { Button } from '@/components/ui/button'

interface NewsCard {
  title: string
  description: string
  image: string
  date: string
}

const newsItems: NewsCard[] = [
  {
    title: 'Admissions Open 2026',
    description:
      'ISMT College is now accepting applications for the 2026 academic year. Apply online through our portal and join our community of learners.',
    image:
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop',
    date: 'July 2026',
  },
  {
    title: 'Cloud Computing Workshop',
    description:
      'Exciting workshop on Azure and cloud technologies featuring industry experts. Gain hands-on experience with modern cloud platforms.',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    date: 'June 2026',
  },
  {
    title: 'Graduation Ceremony',
    description:
      'Celebrate with our graduating class as they receive their degrees and embark on their professional journeys.',
    image:
      'https://images.unsplash.com/photo-1536992412-2d66e9f43e0d?w=400&h=300&fit=crop',
    date: 'May 2026',
  },
]

export default function News() {
  return (
    <section id="news" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
          <p className="text-xl text-gray-600">
            Stay updated with recent events and announcements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-blue-600 font-semibold mb-2">
                  {item.date}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
