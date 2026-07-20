import { Button } from "@/components/ui/button";
import { ArrowLeft, Briefcase, Users, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

/**
 * Opportunities Page - DOST Alumni
 * Design: Modern Minimal Elegance
 * - Opportunity cards with title, description, apply button
 * - Category filters
 * - Clean grid layout
 */

const opportunities = [
  {
    id: 1,
    title: "Mentorluq Proqramı",
    description: "Yeni volunteer-ləri rəhbərlik edin, təcrübənizi paylaşın və cəmiyyətin böyüməsinə kömək edin.",
    category: "Mentorluq",
    type: "Volunteer",
    commitment: "Hər həftə 4-5 saat",
    icon: "Users"
  },
  {
    id: 2,
    title: "Senior Developer - Tech Şirkəti",
    description: "Dinamik tech şirkətində senior developer vəzifəsinə axtarış aparılır. Əlaqədar şəxslərin CV-si qəbul olunur.",
    category: "Karyera",
    type: "İş",
    commitment: "Full-time",
    icon: "Briefcase"
  },
  {
    id: 3,
    title: "Sosial Layihə Lideri",
    description: "Yeni sosial layihəni rəhbərlik edin. Təhsil, sağlamlıq və ya cəmiyyət layihələrində liderlik etmək imkanı.",
    category: "Liderlik",
    type: "Volunteer",
    commitment: "Hər həftə 8-10 saat",
    icon: "TrendingUp"
  },
  {
    id: 4,
    title: "İş Axtarış Koçu",
    description: "Alumni-lərin iş axtarış prosesində onlara kömək edin. CV yazımı, müsahibə hazırlığı və networking.",
    category: "Mentorluq",
    type: "Volunteer",
    commitment: "Hər həftə 3 saat",
    icon: "Users"
  },
  {
    id: 5,
    title: "Marketing Manager - Startup",
    description: "Böyüyən startup-da marketing manager vəzifəsi. Rəqamsal marketing, sosial media, content strategy.",
    category: "Karyera",
    type: "İş",
    commitment: "Full-time",
    icon: "Briefcase"
  },
  {
    id: 6,
    title: "Tədbirləri Koordinatoru",
    description: "Alumni tədbirlərinin planlaşdırılması və koordinasiyasında iştirak edin. Event management təcrübəsi qazanın.",
    category: "Liderlik",
    type: "Volunteer",
    commitment: "Hər həftə 5-6 saat",
    icon: "TrendingUp"
  }
];

const categories = ["Hamısı", "Mentorluq", "Karyera", "Liderlik"];

export default function Opportunities() {
  const [selectedCategory, setSelectedCategory] = useState("Hamısı");

  const filteredOpportunities = selectedCategory === "Hamısı" 
    ? opportunities 
    : opportunities.filter(opp => opp.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case "Users":
        return <Users size={24} className="text-[#551A8B]" />;
      case "Briefcase":
        return <Briefcase size={24} className="text-[#551A8B]" />;
      case "TrendingUp":
        return <TrendingUp size={24} className="text-[#551A8B]" />;
      default:
        return null;
    }
  };

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
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">İmkanlar</h1>
          <p className="text-lg text-gray-600">
            Karyera, mentorluq və volunteer imkanlarını kəşf edin
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

        {/* Opportunities Grid */}
        <div className="grid grid-cols-2 gap-8">
          {filteredOpportunities.map((opportunity) => (
            <div key={opportunity.id} className="card-minimal">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#F5F3FF] rounded-lg">
                  {getIcon(opportunity.icon)}
                </div>
                <span className="inline-block text-xs bg-[#F5F3FF] text-[#551A8B] px-3 py-1 rounded-full font-medium">
                  {opportunity.type}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {opportunity.title}
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {opportunity.description}
              </p>

              <div className="mb-6 pb-6 border-b border-gray-100">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Zaman Ayırma:</span> {opportunity.commitment}
                </p>
              </div>

              <div className="flex gap-3">
                <Button className="btn-primary flex-1">
                  Müraciət Et
                </Button>
                <Button variant="outline" className="flex-1 border-gray-200 text-gray-900 hover:bg-gray-50">
                  Ətraflı
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredOpportunities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Bu kateqoriyada imkana tapılmadı</p>
          </div>
        )}
      </main>
    </div>
  );
}
