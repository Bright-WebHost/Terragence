import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Zap, Cog, Activity, Stethoscope, Send, House, Book, ShoppingCart, Target, User, Phone } from "lucide-react";

const createPageUrl = (pageName) => {
  return `/${pageName.toLowerCase().replace(/\s+/g, '-')}`;
};

const Footer = () => {
  const [footerForm, setFooterForm] = useState({ email: '', message: '' });

  const handleFooterFormSubmit = (e) => {
    e.preventDefault();
    console.log("Footer form submitted:", footerForm);
    alert("Thank you for your message!");
    setFooterForm({ email: '', message: '' });
  };

  return (
  <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12">
          
          {/* About */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-20 sm:h-20 bg-gradient-to-br from-white to-amber-50 rounded-lg flex items-center justify-center shadow-md">
                <img
                  src="img/Terragence  LOGO  Full.png"
                  alt="Terragence Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg sm:text-xl text-blue-600">
                  Terragence Instruments
                </h3>
                <p className="text-sm text-slate-400">Private Limited</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Intelligence at the Core of Every Solution. Your trusted  trading partner for
              high-quality industrial and medical products.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  Terragence Instruments Private Limited
                 
                  Farangipete Bantwal, India
                  
                  PIN CODE: 574 143
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4" />
                <span>sales@terragence.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4" />
                <span>+919742807007</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-4">Product Lines</h4>
            <div className="space-y-3 text-sm">
              <Link
                to={createPageUrl("Products")}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Zap className="w-4 h-4 text-blue-400" /> Electrical
              </Link>
              <Link
                to={createPageUrl("Products")}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Cog className="w-4 h-4 text-slate-400" /> Mechanical
              </Link>
              <Link
                to={createPageUrl("Products")}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Activity className="w-4 h-4 text-amber-400" /> Instruments
              </Link>
              <Link
                to={createPageUrl("Products")}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Stethoscope className="w-4 h-4 text-green-400" /> Medical
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white  mb-4">Main Page</h4>
            <div className="space-y-3 text-sm">
              <Link
                to={createPageUrl("")}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <House  className="w-4 h-4 text-blue-400" /> Home
              </Link>
              <Link
                to={createPageUrl("About")}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Book className="w-4 h-4 text-slate-400" /> About Us
              </Link>
              <Link
                to={createPageUrl("Products")}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <ShoppingCart className="w-4 h-4 text-amber-400" /> Products
              </Link>
              <Link
                to={createPageUrl("Brands")}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Target className="w-4 h-4 text-red-400" /> Brands
              </Link>
              <Link
                to={createPageUrl("Contact")}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <User className="w-4 h-4 text-green-400" /> Contact Us
              </Link>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-4">
            <h4 className="font-semibold text-white mb-4">Quick Message</h4>
            <form onSubmit={handleFooterFormSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                value={footerForm.email}
                onChange={(e) =>
                  setFooterForm({ ...footerForm, email: e.target.value })
                }
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <textarea
                placeholder="Your Message..."
                value={footerForm.message}
                onChange={(e) =>
                  setFooterForm({ ...footerForm, message: e.target.value })
                }
                required
                rows={3}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                Send <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Terragence Instruments Pvt Ltd. | Site by Bright Media.
        </div>
      </div>
    </footer>
  );
};

export default Footer;