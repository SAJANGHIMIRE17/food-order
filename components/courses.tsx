import { Button } from '@/components/ui/button'
import {
  BookOpen,
  Briefcase,
  Users,
  Utensils,
} from 'lucide-react'

interface CourseCard {
  icon: React.ReactNode
  title: string
  description: string
}

const courses: CourseCard[] = [
  {
    icon: <BookOpen className="w-12 h-12 text-blue-600" />,
    title: 'BSc (Hons) Computing',
    description:
      'Comprehensive program in computer science covering software development, web technologies, and emerging technologies.',
  },
  {
    icon: <Briefcase className="w-12 h-12 text-blue-600" />,
    title: 'BBA',
    description:
      'Business Administration degree focusing on management, finance, marketing, and entrepreneurship.',
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: 'MBA',
    description:
      'Master of Business Administration for professionals seeking advanced management and leadership skills.',
  },
  {
    icon: <Utensils className="w-12 h-12 text-blue-600" />,
    title: 'BHM',
    description:
      'Bachelor of Hotel Management focusing on hospitality, event management, and customer service excellence.',
  },
]

export default function Courses() {
  return (
    <section id="courses" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-xl text-gray-600">
            Explore our range of internationally recognized programmes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col"
            >
              <div className="mb-4 flex justify-center">{course.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {course.title}
              </h3>
              <p className="text-gray-600 text-center mb-6 flex-grow">
                {course.description}
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
