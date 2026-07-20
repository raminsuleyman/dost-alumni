import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit2, Award, Calendar, Clock, Download } from "lucide-react";
import { Link } from "wouter";

/**
 * Profile Page - DOST Alumni
 * Design: Modern Minimal Elegance
 * - Profile photo, name, badge
 * - Volunteer history
 * - Certificates
 * - Participated events
 */

export default function Profile() {
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
                src="/dost-alumni-logo.webp" 
                alt="DOST Alumni" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gray-900">DOST Alumni</span>
            </div>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Profile Header Card */}
        <div className="card-minimal mb-12">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-6">
              {/* Profile Photo */}
              <div className="w-32 h-32 bg-gradient-to-br from-[#551A8B] to-[#7C3AAD] rounded-[12px] flex items-center justify-center text-white text-4xl font-bold">
                AZ
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">Azər Əliyev</h1>
                  <span className="inline-block bg-[#F5F3FF] text-[#551A8B] px-3 py-1 rounded-full text-sm font-semibold">
                    Alumni
                  </span>
                </div>
                <p className="text-gray-600 mb-4">Baku, Azərbaycan</p>
                <p className="text-gray-600 mb-6">
                  Sosial layihələr, təhsil və cəmiyyət inkişafına həvəskar. DOST Volunteer Proqramını 2023-cü ildə tamamlamışam.
                </p>
                <div className="flex gap-3">
                  <Button className="btn-primary">
                    <Edit2 size={18} className="mr-2" />
                    Profili Redaktə Et
                  </Button>
                  <Button variant="outline" className="border-gray-200 text-gray-900 hover:bg-gray-50">
                    Paylaş
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-50 rounded-[12px] p-6">
            <p className="text-gray-600 text-sm mb-2">Qatıldığı Tədbirlər</p>
            <p className="text-3xl font-bold text-gray-900">12</p>
          </div>
          <div className="bg-gray-50 rounded-[12px] p-6">
            <p className="text-gray-600 text-sm mb-2">Volunteer Saatları</p>
            <p className="text-3xl font-bold text-gray-900">240</p>
          </div>
          <div className="bg-gray-50 rounded-[12px] p-6">
            <p className="text-gray-600 text-sm mb-2">Sertifikat</p>
            <p className="text-3xl font-bold text-gray-900">5</p>
          </div>
          <div className="bg-gray-50 rounded-[12px] p-6">
            <p className="text-gray-600 text-sm mb-2">Layihə Lideri</p>
            <p className="text-3xl font-bold text-gray-900">2</p>
          </div>
        </div>

        {/* Volunteer History */}
        <div className="card-minimal mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Tarixi</h2>
          
          <div className="space-y-6">
            {/* History Item 1 */}
            <div className="pb-6 border-b border-gray-100 last:border-b-0 last:pb-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Təhsil Layihəsi Lideri</h3>
                <span className="text-sm text-gray-500">2024</span>
              </div>
              <p className="text-gray-600 mb-3">
                Yerli məktəblərdə STEM təhsil layihəsini rəhbərlik etdim. 50+ tələbəyə kömək etdim.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  120 saat
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  Yanvar - Iyun
                </span>
              </div>
            </div>

            {/* History Item 2 */}
            <div className="pb-6 border-b border-gray-100 last:border-b-0 last:pb-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Cəmiyyət Mentoru</h3>
                <span className="text-sm text-gray-500">2023-2024</span>
              </div>
              <p className="text-gray-600 mb-3">
                3 yeni volunteer-ə mentorluq verdim. Onların volunteer yolculuğunda rəhbərlik etdim.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  80 saat
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  Davamlı
                </span>
              </div>
            </div>

            {/* History Item 3 */}
            <div className="pb-6 border-b border-gray-100 last:border-b-0 last:pb-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Sağlamlıq Layihəsi</h3>
                <span className="text-sm text-gray-500">2023</span>
              </div>
              <p className="text-gray-600 mb-3">
                Cəmiyyət sağlamlıq proqramında volunteer. Sağlamlıq məsələləri haqqında fəaliyyət.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  40 saat
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  Sentyabr - Dekabr
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="card-minimal mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sertifikatlar</h2>
          
          <div className="grid grid-cols-3 gap-6">
            {/* Certificate 1 */}
            <div className="bg-gradient-to-br from-[#F5F3FF] to-[#E9E0FF] rounded-[12px] p-6 border border-[#E0D5FF]">
              <div className="flex items-center justify-center w-12 h-12 bg-[#551A8B] rounded-lg mb-4">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Liderlik Sertifikası</h3>
              <p className="text-sm text-gray-600 mb-4">DOST Volunteer Program</p>
              <Button variant="outline" className="w-full border-[#551A8B] text-[#551A8B] hover:bg-[#F5F3FF]">
                <Download size={16} className="mr-2" />
                Yüklə
              </Button>
            </div>

            {/* Certificate 2 */}
            <div className="bg-gradient-to-br from-[#F5F3FF] to-[#E9E0FF] rounded-[12px] p-6 border border-[#E0D5FF]">
              <div className="flex items-center justify-center w-12 h-12 bg-[#551A8B] rounded-lg mb-4">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mentorluq Sertifikası</h3>
              <p className="text-sm text-gray-600 mb-4">DOST Alumni Program</p>
              <Button variant="outline" className="w-full border-[#551A8B] text-[#551A8B] hover:bg-[#F5F3FF]">
                <Download size={16} className="mr-2" />
                Yüklə
              </Button>
            </div>

            {/* Certificate 3 */}
            <div className="bg-gradient-to-br from-[#F5F3FF] to-[#E9E0FF] rounded-[12px] p-6 border border-[#E0D5FF]">
              <div className="flex items-center justify-center w-12 h-12 bg-[#551A8B] rounded-lg mb-4">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">STEM Eğitmeni</h3>
              <p className="text-sm text-gray-600 mb-4">Təhsil Layihəsi</p>
              <Button variant="outline" className="w-full border-[#551A8B] text-[#551A8B] hover:bg-[#F5F3FF]">
                <Download size={16} className="mr-2" />
                Yüklə
              </Button>
            </div>
          </div>
        </div>

        {/* Participated Events */}
        <div className="card-minimal">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Qatıldığı Tədbirlər</h2>
          
          <div className="space-y-3">
            {[
              "Alumni Networking Gecəsi - 28 Temmuz, 2024",
              "Karyera Seminarı: Tech Sektoru - 5 Avqust, 2024",
              "Liderlik Seminarı - 19 Avqust, 2024",
              "Alumni Picnic - 2 Sentyabr, 2024",
              "Cəmiyyət Məktəbləri - Davamlı",
              "Mentorluq Proqramı - Davamlı",
              "Volunteer Layihəsi: Təhsil - 12 Avqust, 2024",
              "Sosial Layihə Planlaması - 26 Avqust, 2024",
              "Networking Brunch - 15 Sentyabr, 2024",
              "İş Axtarış Koçluğu - Davamlı",
              "Təhsil Konferansı - 22 Sentyabr, 2024",
              "Alumni Gala Gecəsi - 30 Sentyabr, 2024"
            ].map((event, index) => (
              <div key={index} className="flex items-center gap-3 pb-3 border-b border-gray-100 last:border-b-0 last:pb-0">
                <div className="w-2 h-2 bg-[#551A8B] rounded-full flex-shrink-0"></div>
                <p className="text-gray-600">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
