import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Users } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

/**
 * Events Page - DOST Alumni
 * Design: Modern Minimal Elegance
 * - Event cards with title, date, location, register button
 * - Simple category filters
 * - Clean grid layout
 */

const events = [
  {
    id: 1,
    title: "Alumni Networking Gecəsi",
    date: "28 Temmuz, 2024",
    time: "18:00 - 21:00",
    location: "Baku Convention Center",
    category: "Networking",
    attendees: 145,
    description: "Volunteer-lərlə tanışlıq, təcrübə paylaşımı və yeni əlaqələr qurmaq üçün xüsusi gecə."
  },
  {
    id: 2,
    title: "Karyera Seminarı: Tech Sektoru",
    date: "5 Avqust, 2024",
    time: "14:00 - 16:30",
    location: "Online Event",
    category: "Karyera",
    attendees: 89,
    description: "Tech sektorunda karyera fırsatları, müsahibə hazırlığı və iş axtarış strategiyası."
  },
  {
    id: 3,
    title: "Volunteer Layihəsi: Təhsil",
    date: "12 Avqust, 2024",
    time: "10:00 - 14:00",
    location: "Community Center",
    category: "Volunteer",
    attendees: 67,
    description: "Yerli məktəblərdə təhsil layihəsində iştirak edin, gənc nəsli dəstəkləyin."
  },
  {
    id: 4,
    title: "Liderlik Seminarı",
    date: "19 Avqust, 2024",
    time: "15:00 - 17:00",
    location: "Business Hub",
    category: "Təlim",
    attendees: 112,
    description: "Effektiv liderlik, komanda idarəçiliyi və proyekt menecmenti haqqında ətraflı seminar."
  },
  {
    id: 5,
    title: "Sosial Layihə Planlaması",
    date: "26 Avqust, 2024",
    time: "16:00 - 18:00",
    location: "Innovation Lab",
    category: "Volunteer",
    attendees: 54,
    description: "Yeni sosial layihə fikirlərinizi planlaşdırın, mentorluq alın, icra edin."
  },
  {
    id: 6,
    title: "Alumni Picnic",
    date: "2 Sentyabr, 2024",
    time: "11:00 - 17:00",
    location: "Abşeron National Park",
    category: "Sosial",
    attendees: 200,
    description: "Alumni cəmiyyətinin əyləncəli günü. Oyunlar, yemək və yeni dostluqlar."
  }
];

const categories = ["Hamısı", "Networking", "Karyera", "Volunteer", "Təlim", "Sosial"];

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("Hamısı");

  const filteredEvents = selectedCategory === "Hamısı" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/dashboard">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <ArrowLeft size={20} className="text-gray-600" />
            </button>
          </Link>
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
              <img 
                src="/manus-storage/dost-alumni-logo_69658aba.png" 
                alt="DOST Alumni" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gray-900">DOST Alumni</span>
            </div>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tədbirlər</h1>
          <p className="text-lg text-gray-600">
            Alumni cəmiyyətinin eksklusiv tədbirlərinə qatılın
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? "bg-[#551A8B] text-white"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="card-minimal">
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-2xl font-bold text-gray-900 flex-1">
                    {event.title}
                  </h2>
                  <span className="inline-block text-xs bg-[#F5F3FF] text-[#551A8B] px-3 py-1 rounded-full font-medium whitespace-nowrap ml-2">
                    {event.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {event.description}
                </p>
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar size={18} className="text-[#551A8B] flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">{event.date}</p>
                    <p className="text-sm text-gray-500">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin size={18} className="text-[#551A8B] flex-shrink-0" />
                  <p className="font-medium text-gray-900">{event.location}</p>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Users size={18} className="text-[#551A8B] flex-shrink-0" />
                  <p className="font-medium text-gray-900">{event.attendees} qatılımçı</p>
                </div>
              </div>

              <Button className="btn-primary w-full">
                Qeydiyyatdan Keç
              </Button>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Bu kateqoriyada tədbirə tapılmadı</p>
          </div>
        )}
      </main>
    </div>
  );
}
