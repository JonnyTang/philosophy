import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { Layout } from "@/components/Layout";
import { PhilosophersPage } from "@/pages/PhilosophersPage";
import { PhilosopherDetailPage } from "@/pages/PhilosopherDetailPage";
import { ComingSoonPage } from "@/pages/ComingSoonPage";
import { BranchesPage } from "@/pages/BranchesPage";
import { QuotesPage } from "@/pages/QuotesPage";
import { TimelinePage } from "@/pages/TimelinePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "philosophers", element: <PhilosophersPage /> },
      { path: "philosophers/:slug", element: <PhilosopherDetailPage /> },
      { path: "branches", element: <BranchesPage /> },
      { path: "quotes", element: <QuotesPage /> },
      { path: "timeline", element: <TimelinePage /> },
    ]
  },
]);
// Do not touch this code
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>,
)