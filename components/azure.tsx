export default function Azure() {
  return (
    <section id="azure" className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            Hosted on Microsoft Azure
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            This website demonstrates the successful migration of ISMT College&apos;s
            services from on-premises infrastructure to Microsoft Azure. It is hosted
            on an Azure Virtual Machine running Ubuntu and Apache Web Server, with
            traffic managed through Azure Load Balancer as part of a comprehensive
            cloud computing implementation project.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-blue-600 mb-2">Infrastructure</h3>
              <p className="text-gray-600">Azure Virtual Machine</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-blue-600 mb-2">Operating System</h3>
              <p className="text-gray-600">Ubuntu Linux</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-blue-600 mb-2">Web Server</h3>
              <p className="text-gray-600">Apache Web Server</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
