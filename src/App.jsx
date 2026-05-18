import { LanguageProvider } from './context/LanguageProvider'
import AppRoutes from './routes/routes'

function App() {
  return (
    <LanguageProvider>
      <AppRoutes />
    </LanguageProvider>
  )
}

export default App
