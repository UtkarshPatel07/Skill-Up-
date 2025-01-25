import { ArrowRight, Star, ChevronLeft, ChevronRight, Award } from "lucide-react"
import Image from "next/image"

export default function MainContent() {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Welcome back, User!</h1>

      {/* Skill Matches Carousel */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Skill Matches</h2>
        <div className="relative">
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {[1, 2, 3, 4, 5].map((match) => (
              <div key={match} className="flex-none w-64 bg-white rounded-lg shadow-md p-4">
                <Image
                  src={`/placeholder.svg?height=100&width=100`}
                  alt={`Match ${match}`}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-center mb-2">User {match}</h3>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="bg-[#2ECC40] text-white px-2 py-1 rounded-full text-xs">Skill 1</span>
                  <span className="bg-[#0074D9] text-white px-2 py-1 rounded-full text-xs">Skill 2</span>
                </div>
                <button className="w-full bg-[#B10DC9] text-white py-2 rounded-md hover:bg-[#8a0a9b] transition duration-300">
                  Connect
                </button>
              </div>
            ))}
          </div>
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </section>

      {/* My Videos */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">My Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((video) => (
            <div key={video} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={`/placeholder.svg?height=200&width=350`}
                  alt={`Video ${video}`}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="h-16 w-16 text-white opacity-75" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Video Title {video}</h3>
                <div className="flex items-center mb-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-gray-300" />
                  <span className="ml-2 text-gray-600">(4.0)</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">Uploaded on: 01/01/2023</p>
                <button className="text-[#B10DC9] font-semibold hover:underline">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rewards */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rewards</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold">Level 5 Mentor</h3>
              <p className="text-gray-600">Keep sharing your skills to level up!</p>
            </div>
            <div className="bg-[#B10DC9] text-white px-4 py-2 rounded-full">500 XP</div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-yellow-400 mr-4" />
              <div>
                <h4 className="font-semibold">Top Contributor</h4>
                <p className="text-sm text-gray-600">Awarded for consistent high-quality contributions</p>
              </div>
            </div>
            <div className="flex items-center">
              <Award className="h-8 w-8 text-blue-400 mr-4" />
              <div>
                <h4 className="font-semibold">Quick Learner</h4>
                <p className="text-sm text-gray-600">Completed 10 courses in record time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Skills */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recommended Skills to Learn</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ul className="space-y-4">
            {["Machine Learning", "UX Design", "Digital Marketing", "Data Analysis", "Blockchain"].map(
              (skill, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span className="text-lg text-gray-800">{skill}</span>
                  <button className="text-[#0074D9] hover:text-[#0056a3] flex items-center">
                    <span className="mr-2">Explore</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </li>
              ),
            )}
          </ul>
        </div>
      </section>
    </main>
  )
}

