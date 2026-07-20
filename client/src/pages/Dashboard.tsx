import { Button } from "@/components/ui/button";
import { Bell, User, LogOut, Calendar, Lightbulb, Megaphone } from "lucide-react";
import { Link } from "wouter";

/**
 * Dashboard Page - DOST Alumni
 * Design: Modern Minimal Elegance
 * - Welcome message
 * - Three main cards: Upcoming Events, Opportunities, Announcements
 * - Top navigation with notifications and profile
 */

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
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

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Bell size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <User size={20} className="text-gray-600" />
            </button>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              <LogOut size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Xoş Gəldiniz, Azər!
          </h1>
          <p className="text-lg text-gray-600">
            Alumni cəmiyyətinə qoşulmağınız üçün təşəkkür edirik. Yeni imkanları kəşf edin.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          {/* Card 1: Upcoming Events */}
          <div className="card-minimal">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Gələn Tədbirlər</h2>
              <div className="flex items-center justify-center w-10 h-10 bg-[#F5F3FF] rounded-lg">
                <Calendar size={20} className="text-[#551A8B]" />
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {/* Event Item 1 */}
              <div className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                <h3 className="font-semibold text-gray-900 mb-1">Alumni Networking</h3>
                <p className="text-sm text-gray-600 mb-2">28 Temmuz, 2024 • 18:00</p>
                <p className="text-sm text-gray-500">Baku Convention Center</p>
              </div>

              {/* Event Item 2 */}
              <div className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                <h3 className="font-semibold text-gray-900 mb-1">Karyera Seminarı</h3>
                <p className="text-sm text-gray-600 mb-2">5 Avqust, 2024 • 14:00</p>
                <p className="text-sm text-gray-500">Online Event</p>
              </div>

              {/* Event Item 3 */}
              <div className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                <h3 className="font-semibold text-gray-900 mb-1">Volunteer Layihəsi</h3>
                <p className="text-sm text-gray-600 mb-2">12 Avqust, 2024 • 10:00</p>
                <p className="text-sm text-gray-500">Community Center</p>
              </div>
            </div>

            <Link href="/events">
              <Button variant="outline" className="w-full border-gray-200 text-[#551A8B] hover:bg-[#F5F3FF]">
                Bütün Tədbirləri Gör
              </Button>
            </Link>
          </div>

          {/* Card 2: New Opportunities */}
          <div className="card-minimal">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Yeni İmkanlar</h2>
              <div className="flex items-center justify-center w-10 h-10 bg-[#F5F3FF] rounded-lg">
                <Lightbulb size={20} className="text-[#551A8B]" />
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {/* Opportunity Item 1 */}
              <div className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                <h3 className="font-semibold text-gray-900 mb-1">Mentorluq Proqramı</h3>
                <p className="text-sm text-gray-600 mb-2">Yeni volunteer-ləri rəhbərlik edin</p>
                <span className="inline-block text-xs bg-[#F5F3FF] text-[#551A8B] px-2 py-1 rounded">
                  Açıq
                </span>
              </div>

              {/* Opportunity Item 2 */}
              <div className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                <h3 className="font-semibold text-gray-900 mb-1">Karyera Fırsatı</h3>
                <p className="text-sm text-gray-600 mb-2">Tech şirkətində Senior Developer</p>
                <span className="inline-block text-xs bg-[#F5F3FF] text-[#551A8B] px-2 py-1 rounded">
                  Açıq
                </span>
              </div>

              {/* Opportunity Item 3 */}
              <div className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                <h3 className="font-semibold text-gray-900 mb-1">Layihə Lideri</h3>
                <p className="text-sm text-gray-600 mb-2">Yeni sosial layihəni rəhbərlik edin</p>
                <span className="inline-block text-xs bg-[#F5F3FF] text-[#551A8B] px-2 py-1 rounded">
                  Açıq
                </span>
              </div>
            </div>

            <Link href="/opportunities">
              <Button variant="outline" className="w-full border-gray-200 text-[#551A8B] hover:bg-[#F5F3FF]">
                Bütün İmkanları Gör
              </Button>
            </Link>
          </div>

          {/* Card 3: Latest Announcements */}
          <div className="card-minimal">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Son Xəbərlər</h2>
              <div className="flex items-center justify-center w-10 h-10 bg-[#F5F3FF] rounded-lg">
                <Megaphone size={20} className="text-[#551A8B]" />
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {/* Announcement Item 1 */}
              <div className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                <h3 className="font-semibold text-gray-900 mb-1">Alumni Forumu Açıldı</h3>
                <p className="text-sm text-gray-600">2 gün əvvəl</p>
              </div>

              {/* Announcement Item 2 */}
              <div className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                <h3 className="font-semibold text-gray-900 mb-1">Yeni Sertifikat Proqramı</h3>
                <p className="text-sm text-gray-600">5 gün əvvəl</p>
              </div>

              {/* Announcement Item 3 */}
              <div className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                <h3 className="font-semibold text-gray-900 mb-1">Cəmiyyət Məktəbləri Başladı</h3>
                <p className="text-sm text-gray-600">1 həftə əvvəl</p>
              </div>
            </div>

            <Button variant="outline" className="w-full border-gray-200 text-[#551A8B] hover:bg-[#F5F3FF]">
              Bütün Xəbərləri Gör
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-gray-50 rounded-[12px] p-6">
            <p className="text-gray-600 text-sm mb-2">Qatıldığınız Tədbirlər</p>
            <p className="text-3xl font-bold text-gray-900">12</p>
          </div>
          <div className="bg-gray-50 rounded-[12px] p-6">
            <p className="text-gray-600 text-sm mb-2">Əldə Etdiyiniz Sertifikat</p>
            <p className="text-3xl font-bold text-gray-900">5</p>
          </div>
          <div className="bg-gray-50 rounded-[12px] p-6">
            <p className="text-gray-600 text-sm mb-2">Cəmiyyət Üzvü</p>
            <p className="text-3xl font-bold text-gray-900">2,500+</p>
          </div>
          <div className="bg-gray-50 rounded-[12px] p-6">
            <p className="text-gray-600 text-sm mb-2">Volunteer Saatları</p>
            <p className="text-3xl font-bold text-gray-900">240</p>
          </div>
        </div>
      </main>
    </div>
  );
}
