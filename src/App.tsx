import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { WorkSection } from './components/WorkSection';
import { LearningSection } from './components/LearningSection';
import { ReflectionSection } from './components/ReflectionSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WorkSection />
      <LearningSection />
      <ReflectionSection />
      <Footer />
    </div>
  );
}
