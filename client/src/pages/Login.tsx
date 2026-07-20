import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

/**
 * Login Page - DOST Alumni
 * Design: Modern Minimal Elegance
 * - Simple login form
 * - Link to landing page
 */

export default function Login() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center justify-center gap-2 mb-12 cursor-pointer hover:opacity-80 transition">
            <img 
              src="/dost-alumni-logo.webp" 
              alt="DOST Alumni" 
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-gray-900">DOST Alumni</span>
          </div>
        </Link>

        {/* Form Card */}
        <div className="card-minimal mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Giriş Edin</h1>
          <p className="text-gray-600 mb-8">Alumni cəmiyyətinə qoşulmaq üçün giriş edin</p>

          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email Ünvanı
              </label>
              <Input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-[12px] border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#551A8B] focus:outline-none transition"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Şifrə
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-[12px] border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#551A8B] focus:outline-none transition"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-200 text-[#551A8B] focus:ring-[#551A8B]"
                />
                <span className="text-sm text-gray-600">Məni Xatırla</span>
              </label>
              <a href="#" className="text-sm text-[#551A8B] hover:underline">
                Şifrəni Unutdum?
              </a>
            </div>

            {/* Submit Button */}
            <Link href="/dashboard">
              <Button className="btn-primary w-full py-3 text-base">
                Giriş Edin
              </Button>
            </Link>
          </form>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-gray-600">
            Hələ qeydiyyatdan keçməmisiniz?{" "}
            <Link href="/">
              <a className="text-[#551A8B] font-semibold hover:underline">
                Qeydiyyat Olun
              </a>
            </Link>
          </p>
        </div>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm text-gray-500">ya da</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Social Login */}
        <div className="space-y-3">
          <Button variant="outline" className="w-full border-gray-200 text-gray-900 hover:bg-gray-50 py-3">
            Google ilə Giriş Edin
          </Button>
          <Button variant="outline" className="w-full border-gray-200 text-gray-900 hover:bg-gray-50 py-3">
            LinkedIn ilə Giriş Edin
          </Button>
        </div>
      </div>
    </div>
  );
}
