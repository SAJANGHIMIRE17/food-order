import { Star } from 'lucide-react'

interface Testimonial {
  name: string
  title: string
  message: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    title: 'BSc Computing Graduate',
    message:
      'ISMT College provided me with the perfect blend of theoretical knowledge and practical skills. The faculty was supportive, and the facilities were top-notch. I secured my dream job right after graduation.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    name: 'Rajesh Poudel',
    title: 'MBA Graduate',
    message:
      'The MBA programme at ISMT enhanced my business acumen significantly. The case studies and industry interactions gave me real-world insights that proved invaluable in my career.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    name: 'Aisha Khan',
    title: 'BHM Graduate',
    message:
      'The hospitality program equipped me with excellent management skills and industry connections. I&apos;m now working at a leading hotel chain and love every moment of it.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Student Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            Hear from our successful alumni
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-blue-600">{testimonial.title}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic">&ldquo;{testimonial.message}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
