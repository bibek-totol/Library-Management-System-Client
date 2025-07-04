import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router/index.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div className="text-white p-8 mt-20">Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)
