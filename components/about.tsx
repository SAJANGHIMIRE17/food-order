export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1427504494785-cdbe172e6b8e?w=600&h=400&fit=crop"
              alt="ISMT College Campus"
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-blue-600 mb-6">About ISMT</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              ISMT College is a premier higher education institution in Nepal,
              dedicated to delivering world-class education through innovative
              teaching methodologies and industry-aligned curricula. We offer
              internationally recognized undergraduate and postgraduate
              programmes designed to prepare students for global careers.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              With state-of-the-art learning facilities, experienced faculty
              members, and strong partnerships with industry leaders, ISMT
              College provides a comprehensive educational experience that
              combines theoretical knowledge with practical skills development.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">150+</p>
                <p className="text-gray-600">Faculty Members</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">5000+</p>
                <p className="text-gray-600">Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
