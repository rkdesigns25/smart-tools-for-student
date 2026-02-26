import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import CgpaPage from "./pages/CgpaPage";
import AttendancePage from "./pages/AttendancePage";
import PercentagePage from "./pages/PercentagePage";
import AiToolsPage from "./pages/AiToolsPage";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
import PrivacyPage from "./pages/PrivacyPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

// SEO Pages - lazy loaded for performance
const CgpaToPercentagePage = lazy(() => import("./pages/seo/CgpaToPercentagePage"));
const CgpaForEngineeringPage = lazy(() => import("./pages/seo/CgpaForEngineeringPage"));
const SgpaToCgpaPage = lazy(() => import("./pages/seo/SgpaToCgpaPage"));
const HowToCalculateCgpaPage = lazy(() => import("./pages/seo/HowToCalculateCgpaPage"));
const CgpaSemesterWisePage = lazy(() => import("./pages/seo/CgpaSemesterWisePage"));
const HowToImproveCgpaPage = lazy(() => import("./pages/seo/HowToImproveCgpaPage"));
const CgpaForJobsPage = lazy(() => import("./pages/seo/CgpaForJobsPage"));
const BunkCalculatorPage = lazy(() => import("./pages/seo/BunkCalculatorPage"));
const Attendance75PercentPage = lazy(() => import("./pages/seo/Attendance75PercentPage"));
const MinimumAttendancePage = lazy(() => import("./pages/seo/MinimumAttendancePage"));
const CollegeAttendanceTrackerPage = lazy(() => import("./pages/seo/CollegeAttendanceTrackerPage"));
const MarksPercentagePage = lazy(() => import("./pages/seo/MarksPercentagePage"));
const RequiredMarksPage = lazy(() => import("./pages/seo/RequiredMarksPage"));
const AiGpaPredictorPage = lazy(() => import("./pages/seo/AiGpaPredictorPage"));
const StudyTimeEstimatorPage = lazy(() => import("./pages/seo/StudyTimeEstimatorPage"));
const AiStudyPlannerPage = lazy(() => import("./pages/seo/AiStudyPlannerPage"));
const ExamScorePredictorPage = lazy(() => import("./pages/seo/ExamScorePredictorPage"));
const AcademicPerformanceTrackerPage = lazy(() => import("./pages/seo/AcademicPerformanceTrackerPage"));
const GpaCalculatorOnlinePage = lazy(() => import("./pages/seo/GpaCalculatorOnlinePage"));
const GradeNeededToPassPage = lazy(() => import("./pages/seo/GradeNeededToPassPage"));
const CgpaCalculatorIndiaPage = lazy(() => import("./pages/seo/CgpaCalculatorIndiaPage"));
const StudyHoursCalculatorPage = lazy(() => import("./pages/seo/StudyHoursCalculatorPage"));
const SmartStudentToolsPage = lazy(() => import("./pages/seo/SmartStudentToolsPage"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" /></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cgpa" element={<CgpaPage />} />
            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/percentage" element={<PercentagePage />} />
            <Route path="/ai-tools" element={<AiToolsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* SEO Pages */}
            <Route path="/cgpa-to-percentage" element={<CgpaToPercentagePage />} />
            <Route path="/cgpa-calculator-engineering" element={<CgpaForEngineeringPage />} />
            <Route path="/sgpa-to-cgpa-converter" element={<SgpaToCgpaPage />} />
            <Route path="/how-to-calculate-cgpa" element={<HowToCalculateCgpaPage />} />
            <Route path="/cgpa-calculator-semester-wise" element={<CgpaSemesterWisePage />} />
            <Route path="/how-to-improve-cgpa" element={<HowToImproveCgpaPage />} />
            <Route path="/cgpa-required-for-placements" element={<CgpaForJobsPage />} />
            <Route path="/bunk-calculator" element={<BunkCalculatorPage />} />
            <Route path="/attendance-calculator-75-percent" element={<Attendance75PercentPage />} />
            <Route path="/minimum-attendance-calculator" element={<MinimumAttendancePage />} />
            <Route path="/college-attendance-tracker" element={<CollegeAttendanceTrackerPage />} />
            <Route path="/marks-percentage-calculator" element={<MarksPercentagePage />} />
            <Route path="/required-marks-calculator" element={<RequiredMarksPage />} />
            <Route path="/ai-gpa-predictor" element={<AiGpaPredictorPage />} />
            <Route path="/study-time-estimator" element={<StudyTimeEstimatorPage />} />
            <Route path="/ai-study-planner" element={<AiStudyPlannerPage />} />
            <Route path="/exam-score-predictor" element={<ExamScorePredictorPage />} />
            <Route path="/academic-performance-tracker" element={<AcademicPerformanceTrackerPage />} />
            <Route path="/gpa-calculator-online" element={<GpaCalculatorOnlinePage />} />
            <Route path="/grade-needed-to-pass" element={<GradeNeededToPassPage />} />
            <Route path="/cgpa-calculator-india" element={<CgpaCalculatorIndiaPage />} />
            <Route path="/study-hours-calculator" element={<StudyHoursCalculatorPage />} />
            <Route path="/smart-student-tools" element={<SmartStudentToolsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
