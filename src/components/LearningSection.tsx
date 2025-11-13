import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code2, Layers, Users } from 'lucide-react';

const learningAreas = [
  {
    icon: Code2,
    title: '技術學習',
    description: '首次實作全端技術棧，從前端框架到後端服務獨力完成；從被動接受知識的學生，轉變成自學開發技術的工程師',
    technologies: [
      'React',
      'TypeScript',
      'NestJS',
      'MSSQL',
      'LDAP',
      'TypeORM',
      'React Router',
      'RESTful API',
    ],
  },
  {
    icon: Layers,
    title: '技術棧選擇原因',
    description: '理解企業級應用開發中技術選型的考量因素，學習如何根據需求選擇合適的技術方案',
    technologies: [
      'TypeORM：靈活的資料庫設計',
      'NestJS：模組化架構',
      'TypeScript：型別安全',
      'React：元件化開發',
    ],
  },
  {
    icon: Users,
    title: '企業文化與團隊協作',
    description: '透過會議觀察、團隊合作和文件管理實踐，了解企業運作模式與專業工作流程',
    technologies: [
      '敏捷開發流程',
      '程式碼審查',
      '團隊溝通',
      '文件規範',
      '專案管理',
      'Git 協作',
    ],
  },
];

function LearningCard({ area, index }: { area: typeof learningAreas[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#2563EB]">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-[#2563EB]/10 rounded-lg">
              <area.icon className="h-6 w-6 text-[#2563EB]" />
            </div>
            <CardTitle className="text-[#1E3A8A]">{area.title}</CardTitle>
          </div>
          <CardDescription className="text-gray-600 leading-relaxed mt-4">
            {area.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {area.technologies.map((tech, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="bg-[#E2E8F0] text-[#1E3A8A] hover:bg-[#2563EB] hover:text-white transition-colors" asChild={false}              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function LearningSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="learning" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-[#1E3A8A] mb-4">貳、學習</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            在實習過程中獲得的技術能力與軟實力成長
          </p>
        </motion.div>

        <div className="space-y-8">
          {learningAreas.map((area, index) => (
            <LearningCard key={index} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
