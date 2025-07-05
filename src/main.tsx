import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router/index.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <Suspense fallback={<div className="text-white p-8 mt-20">Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
    </Provider>
  </StrictMode>,
)
