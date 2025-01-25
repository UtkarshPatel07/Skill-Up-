"use client"

import { useState } from "react"
import { Play, Heart, BookmarkPlus } from "lucide-react"
import Image from "next/image"
import TopNavBar from "@/components/dashboard/TopNavBar"
import { Button } from "@/components/ui/button"

const categories = ["All", "Programming", "Design", "Marketing", "Cooking", "Music", "Language"]

const videos = [
  {
    id: 1,
    title: "Introduction to React Hooks",
    category: "Programming",
    thumbnail: "/placeholder.svg?height=200&width=350",
    likes: 1200,
    saves: 450,
  },
  {
    id: 2,
    title: "Mastering UI/UX Design Principles",
    category: "Design",
    thumbnail: "/placeholder.svg?height=200&width=350",
    likes: 980,
    saves: 320,
  },
  {
    id: 3,
    title: "Digital Marketing Strategies for 2023",
    category: "Marketing",
    thumbnail: "/placeholder.svg?height=200&width=350",
    likes: 1500,
    saves: 600,
  },
  {
    id: 4,
    title: "Gourmet Cooking at Home",
    category: "Cooking",
    thumbnail: "/placeholder.svg?height=200&width=350",
    likes: 2200,
    saves: 890,
  },
  {
    id: 5,
    title: "Guitar Basics for Beginners",
    category: "Music",
    thumbnail: "/placeholder.svg?height=200&width=350",
    likes: 1800,
    saves: 720,
  },
  {
    id: 6,
    title: "Spanish for Travelers",
    category: "Language",
    thumbnail: "/placeholder.svg?height=200&width=350",
    likes: 1100,
    saves: 480,
  },
]

export default function ReelsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredVideos = activeCategory === "All" ? videos : videos.filter((video) => video.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-100">
      <TopNavBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#B10DC9]">
          Discover Learning Videos Tailored for You on SkillUp
        </h1>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto" role="tablist">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`mx-2 ${activeCategory === category ? "bg-[#B10DC9] text-white" : "bg-white text-[#B10DC9]"}`}
              role="tab"
              aria-selected={activeCategory === category}
              aria-controls={`${category.toLowerCase()}-panel`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Video Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="tabpanel"
          id={`${activeCategory.toLowerCase()}-panel`}
        >
          {filteredVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  width={350}
                  height={200}
                  layout="responsive"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    className="bg-[#B10DC9] text-white rounded-full p-3 hover:bg-[#8a0a9b]"
                    aria-label={`Play ${video.title}`}
                  >
                    <Play className="h-8 w-8" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{video.category}</span>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      className="text-red-500 hover:text-red-600"
                      aria-label={`Like ${video.title}. ${video.likes} likes`}
                    >
                      <Heart className="h-5 w-5 mr-1" aria-hidden="true" />
                      {video.likes}
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-blue-500 hover:text-blue-600"
                      aria-label={`Save ${video.title}. ${video.saves} saves`}
                    >
                      <BookmarkPlus className="h-5 w-5 mr-1" aria-hidden="true" />
                      {video.saves}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

