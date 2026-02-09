// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
// import { RequestAccessModal } from './RequestAccessModal';
// import { Logo } from './Logo';

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   const navItems = ['Features', 'How It Works', 'Use Cases', 'Pricing'];

//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1F]/80 backdrop-blur-lg border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//             >
//               <Logo variant="full" size="md" />
//             </motion.div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               {navItems.map((item, index) => (
//                 <motion.a
//                   key={item}
//                   href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="text-[#6B7280] hover:text-white transition-colors text-sm font-medium"
//                 >
//                   {item}
//                 </motion.a>
//               ))}
//               <motion.a
//                 href="#login"
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="text-[#6B7280] hover:text-white transition-colors text-sm font-medium"
//               >
//                 Login
//               </motion.a>
//               <motion.button
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.5 }}
//                 className="px-6 py-2.5 bg-[#2D6BFF] hover:bg-[#1E5AFF] text-white rounded-lg font-medium transition-all text-sm"
//                 onClick={() => setShowModal(true)}
//               >
//                 Request Access
//               </motion.button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden text-white"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden pb-6"
//             >
//               {navItems.map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
//                   className="block py-3 text-[#6B7280] hover:text-white transition-colors"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item}
//                 </a>
//               ))}
//               <a
//                 href="#login"
//                 className="block py-3 text-[#6B7280] hover:text-white transition-colors"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Login
//               </a>
//               <button
//                 className="mt-4 w-full px-6 py-2.5 bg-[#2D6BFF] hover:bg-[#1E5AFF] text-white rounded-lg font-medium transition-all"
//                 onClick={() => {
//                   setIsOpen(false);
//                   setShowModal(true);
//                 }}
//               >
//                 Request Access
//               </button>
//             </motion.div>
//           )}
//         </div>
//       </nav>

//       <RequestAccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
//     </>
//   );
// }





import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { RequestAccessModal } from './RequestAccessModal';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navItems = [
    { name: 'What We Provide', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Team', href: '#team' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L3 5V8C3 11 5 13 8 15C11 13 13 11 13 8V5L8 2Z" fill="black"/>
                </svg>
              </div>
              <span className="text-white text-sm font-medium tracking-tight">
                Afric Analyzer
              </span>
            </motion.div>

            {/* Desktop Navigation - Minimal style */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-white/60 hover:text-white transition-colors text-sm font-light tracking-wide"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* CTA Button - Minimal pill style */}
            <div className="hidden md:flex items-center gap-4">
              <motion.a
                href="#login"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white/60 hover:text-white transition-colors text-sm font-light"
              >
                Sign In
              </motion.a>
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2 bg-white hover:bg-white/90 text-black rounded-full text-sm font-medium transition-all"
                onClick={() => setShowModal(true)}
              >
                Waitlist
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white/80 hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/5"
            >
              <div className="py-4 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-white/60 hover:text-white transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#login"
                  className="block py-2 text-white/60 hover:text-white transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </a>
                <button
                  className="mt-2 w-full px-5 py-2.5 bg-white hover:bg-white/90 text-black rounded-full text-sm font-medium transition-all"
                  onClick={() => {
                    setIsOpen(false);
                    setShowModal(true);
                  }}
                >
                  Waitlist
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      <RequestAccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}



