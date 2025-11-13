import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Linkedin, Github, FileDown } from 'lucide-react';
import qrCode from "../assets/report-qrcode.png";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:s1111718@mail.yzu.edu.tw' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/劉書卉Avis' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/lshui1021' },
  ];

  return (
    <footer id="contact" className="bg-[#1E3A8A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="mb-6 text-white">感謝您的瀏覽</h3>
          {/* Contact Links */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex flex-col items-center space-y-2 group"
              >
                <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                  <link.icon className="h-6 w-6" />
                </div>
                <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* QR Code Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="inline-block"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                  <div className="text-center text-[#1E3A8A] p-4">
                     <img
                        src={qrCode}
                        alt="QR Code"
                        className="w-full h-full object-contain p-2"
                      />
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-white/90 mb-2">掃描 QR Code</p>
                  <p className="text-sm text-white/70">查看完整實習報告 PDF</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-sm text-white/60">
              © 2025 劉書卉 | 元智大學資訊管理學系 第三十屆專業實習報告
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
