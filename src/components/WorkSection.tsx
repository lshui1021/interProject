import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Lock, Database, FileText, Shield, Route, Upload } from 'lucide-react';

const projects = [
  {
    title: '開發框架與基礎架構學習',
    description: '實習初期，透過小型專案（如佈告欄）熟悉公司既有的 C#、Blazor 與 MS SQL Server 架構，實作 CRUD 功能並了解資料存取層與業務邏輯層的分層設計。為獨立開發知識管理系統，自主學習並搭建 React、TypeScript、NestJS 與 TypeORM 的前後端分離架構。',
    image: 'https://images.unsplash.com/photo-1619105277251-eeabc2514247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBkYXNoYm9hcmQlMjBibHVyfGVufDF8fHx8MTc2MTIwMjExMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      { icon: Database, text: 'C# 、 Blazor 專案架構熟悉' },
      { icon: FileText, text: 'React + NestJS 前後端分離架構搭建' },
      { icon: Shield, text: 'TypeORM 彈性資料關聯邏輯設計' },
    ],
  },
  {
    title: '大數據平台的權限管理模組實作',
    description: '針對大數據平台的需求，實作基於角色的存取控制 (RBAC)，登入後依使用者角色動態呈現側邊欄與功能項目，以限制使用者僅能存取與其職務相關的功能，維持系統安全性。此模組後續被改良並應用於知識管理系統中，並具備路由阻擋機制。',
    image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjEyMDIxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      { icon: Lock, text: 'RBAC 角色基礎存取控制設計' },
      { icon: Shield, text: '側邊欄依權限動態渲染' },
      { icon: Route, text: '路由阻擋機制與權限驗證' },
    ],
  },
  {
    title: '知識管理系統 (KMS) 獨立開發',
    description: '實習期間主要負責此系統的開發工作，從資料庫設計、後端 API 撰寫、前端介面建置到系統整合皆為獨立完成。開發目的是建立知識集中化的平台，供員工公開查閱資訊，減輕開發人員的維護負擔。核心功能包含：整合 Active Directory (AD) 登入、RBAC 權限管理，以及文章上傳與轉換。',
    image: 'https://images.unsplash.com/photo-1726462987391-fbb6991a8248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMHNjcmVlbnxlbnwxfHx8fDE3NjEyMDIxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      { icon: Upload, text: '整合 AD 域控登入機制 (NestJS/ldapjs)' },
      { icon: Database, text: '支援 DOCX 文件自動轉換為 HTML 格式' },
      { icon: FileText, text: '前端採 React + TypeScript + Fluent UI 實作' },
    ],
  },
  {
    title: '文書處理與會議參與',
    description: '協助更新 ISO 27001 資安文件版本、撰寫整合後的格斯官網測試報告以及旁聽會議，體悟到資訊部在公司的角色，遠不止於技術開發、系統維護與資安管理，更參與了營運決策，因此資訊人員除技術能力外，還需具備跨部門溝通與專案管理能力。',
    image: 'https://plus.unsplash.com/premium_photo-1714618828448-abf8732500c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1200',
    features: [
      { icon: Shield, text: '協助更新 ISO 27001 資安文件版本' },
      { icon: FileText, text: '撰寫整合後的格斯官網測試報告' },
      { icon: Database, text: '旁聽軟體採購與資安稽核會議' },
    ],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group">
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover blur-sm group-hover:blur-none group-hover:scale-110 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <CardHeader>
          <CardTitle className="text-[#1E3A8A]">{project.title}</CardTitle>
          <CardDescription className="text-gray-600 leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-sm text-gray-500">重點整理：</p>
            <div className="space-y-2">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <feature.icon className="h-4 w-4 text-[#2563EB]" />
                  <span className="text-sm text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="work" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-[#1E3A8A] mb-4">壹、工作內容</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            在實習期間參與的主要專案開發工作
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
