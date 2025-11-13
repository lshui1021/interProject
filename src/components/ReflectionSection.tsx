import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { ArrowRight } from 'lucide-react';

const timeline = [
  {
    phase: '實習前',
    title: '充滿期待與些許焦慮',
    content:
      '帶著對企業環境的好奇與對實作經驗的渴望，期待能將課堂所學應用到實際專案中。同時也擔心自己的技術能力是否足以應對實際工作的挑戰，以及能否快速適應團隊的工作節奏與企業文化。',
  },
  {
    phase: '實習中',
    title: '挑戰與成長並行',
    content:
      '面對複雜的業務邏輯和自學技術挑戰，學會了如何在壓力下保持學習熱忱。透過與資深工程師的討論和 code review ，我的 coding 能力有顯著提升。團隊協作的經驗，更是讓我理解到溝通和提交訊息的重要性。',
  },
  {
    phase: '實習後',
    title: '展望未來的職涯發展',
    content:
      '這段實習經歷不僅讓我掌握了現代化的全端開發技能，更重要的是建立了系統性思考和解決問題的能力。未來我希望能夠持續深化技術能力，特別是在系統架構設計和效能優化方面。同時也期許自己能成為一個既有技術深度，又具備良好溝通能力的工程師。',
  },
];

function TimelineItem({ item, index, isLast }: { item: typeof timeline[0]; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className="flex items-start space-x-6">
        {/* Timeline dot and line */}
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 bg-[#2563EB] rounded-full border-4 border-white shadow-lg z-10" />
          {!isLast && <div className="w-0.5 h-full bg-[#E2E8F0] mt-2" />}
        </div>

        {/* Content */}
        <div className="flex-1 pb-12">
          <div className="inline-block px-4 py-1 bg-[#2563EB] text-white rounded-full mb-4">
            {item.phase}
          </div>
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <h3 className="mb-4 text-[#1E3A8A]">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Arrow between items */}
      {!isLast && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.2 + 0.4 }}
          className="absolute left-[7px] top-[calc(100%-3rem)] transform -translate-x-1/2"
        >
          <ArrowRight className="h-5 w-5 text-[#2563EB] rotate-90" />
        </motion.div>
      )}
    </motion.div>
  );
}

export function ReflectionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="reflection" className="py-20 bg-[#E2E8F0]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-[#1E3A8A] mb-4">參、自我評估與心得感想</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            從實習前的期待到實習後的成長，一段充實的學習旅程
          </p>
        </motion.div>

        <div className="relative">
          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isLast={index === timeline.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
