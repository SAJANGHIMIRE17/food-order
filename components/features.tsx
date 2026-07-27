import {
  Users,
  Monitor,
  Globe,
  Handshake,
  Award,
  Briefcase,
} from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: 'Experienced Faculty',
    description:
      'Learn from industry experts and academic professionals with decades of experience.',
  },
  {
    icon: <Monitor className="w-8 h-8 text-blue-600" />,
    title: 'Modern Computer Labs',
    description:
      'State-of-the-art facilities equipped with latest technology and software.',
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: 'International Degree Programmes',
    description:
      'Recognized qualifications that are valued globally by employers.',
  },
  {
    icon: <Handshake className="w-8 h-8 text-blue-600" />,
    title: 'Industry Partnerships',
    description:
      'Strong collaborations with leading organizations for internships and placements.',
  },
  {
    icon: <Award className="w-8 h-8 text-blue-600" />,
    title: 'Scholarship Opportunities',
    description:
      'Financial aid programs for deserving and talented students.',
  },
  {
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    title: 'Career Support',
    description:
      'Comprehensive career guidance and job placement assistance.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose ISMT
          </h2>
          <p className="text-xl text-gray-600">
            Discover what makes ISMT College the preferred choice
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg hover:bg-blue-50 transition duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
