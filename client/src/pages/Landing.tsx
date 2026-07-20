import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Zap } from "lucide-react";
import { Link } from "wouter";

/**
 * Landing Page - DOST Alumni
 * Design: Modern Minimal Elegance
 * - Hero with asymmetric layout (text left, image right)
 * - Three feature cards
 * - Clear CTA buttons
 */

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/manus-storage/dost-alumni-logo_69658aba.png" 
              alt="DOST Alumni" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-gray-900">DOST Alumni</span>
          </div>
          <Link href="/login">
            <Button variant="outline" className="border-gray-200 text-gray-900 hover:bg-gray-50">
              Giriş Edin
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Bir dəfə Volunteer, Həmişə DOST Ailəsinin Üzvü
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  DOST Volunteer Proqramını tamamladınız. İndi alumni cəmiyyətinə qoşulun, yeni imkanları kəşf edin və cəmiyyətlə əbədi əlaqə saxlayın.
                </p>
              </div>

              <div className="flex gap-4">
                <Link href="/dashboard">
                  <Button className="btn-primary flex items-center gap-2 text-base px-8 py-6">
                    Alumni Cəmiyyətinə Qoşul
                    <ArrowRight size={20} />
                  </Button>
                </Link>
                <Button variant="outline" className="border-gray-200 text-gray-900 hover:bg-gray-50 px-8 py-6">
                  Ətraflı Məlumat
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-8 border-t border-gray-100">
                <div>
                  <p className="text-3xl font-bold text-[#551A8B]">2,500+</p>
                  <p className="text-gray-600">Alumni Üzvü</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#551A8B]">150+</p>
                  <p className="text-gray-600">Tədbirə Qatılım</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#551A8B]">50+</p>
                  <p className="text-gray-600">Yeni İmkan</p>
                </div>
              </div>
            </div>

            {/* Right: Illustration */}
            <div className="flex justify-center">
              <img 
                src="/manus-storage/hero-volunteers_6aba0e04.png" 
                alt="Volunteer Community" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Alumni Cəmiyyətində Nə Var?
            </h2>
            <p className="text-xl text-gray-600">
              Volunteer təcrübənizin ardından yeni imkanlar və əbədi əlaqələr
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Feature 1: Community */}
            <div className="card-minimal">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F5F3FF] rounded-lg mb-4">
                <Users size={24} className="text-[#551A8B]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Cəmiyyət</h3>
              <p className="text-gray-600 leading-relaxed">
                Eyni fikirli volunteer-lərlə əlaqə saxlayın, təcrübə paylaşın və birlikdə böyüyün.
              </p>
            </div>

            {/* Feature 2: Events */}
            <div className="card-minimal">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F5F3FF] rounded-lg mb-4">
                <Calendar size={24} className="text-[#551A8B]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Tədbirlər</h3>
              <p className="text-gray-600 leading-relaxed">
                Eksklusiv alumni tədbirlərinə qatılın, networking etmək və yeni dostlar tapın.
              </p>
            </div>

            {/* Feature 3: Opportunities */}
            <div className="card-minimal">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F5F3FF] rounded-lg mb-4">
                <Zap size={24} className="text-[#551A8B]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">İmkanlar</h3>
              <p className="text-gray-600 leading-relaxed">
                Karyera imkanları, volunteer layihələri və mentorluq proqramlarına daxil olun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-gray-900">
            Alumni Cəmiyyətinə Qoşulmağa Hazırsınız?
          </h2>
          <p className="text-xl text-gray-600">
            Volunteer Proqramını tamamlayanlar üçün xüsusi hazırlanmış platform. Qoşulun və yeni imkanları kəşf edin.
          </p>
          <Link href="/dashboard">
            <Button className="btn-primary flex items-center gap-2 text-base px-8 py-6 mx-auto">
              Başlayın
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-white font-bold mb-4">DOST Alumni</h4>
              <p className="text-sm">Volunteer cəmiyyətinin əbədi evi</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Əlaqələr</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Haqqında</a></li>
                <li><a href="#" className="hover:text-white transition">Tədbirlər</a></li>
                <li><a href="#" className="hover:text-white transition">Şərtlər</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Dəstək</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Kömək</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Əlaqə</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Hüquqi</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Məxfilik</a></li>
                <li><a href="#" className="hover:text-white transition">Şərtlər</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex items-center justify-between">
            <p className="text-sm">&copy; 2024 DOST Alumni. Bütün hüquqlar qorunur.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
