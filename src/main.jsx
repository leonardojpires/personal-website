import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function lockHtmlPaddingBottom() {
  const html = document.documentElement

  const enforce = () => {
    if (html.style.paddingBottom !== '0px') {
      html.style.setProperty('padding-bottom', '0px', 'important')
    }
  }

  enforce()

  if (!window.__htmlPaddingObserver) {
    const observer = new MutationObserver(() => enforce())
    observer.observe(html, { attributes: true, attributeFilter: ['style'] })
    window.__htmlPaddingObserver = observer
  }
}

lockHtmlPaddingBottom()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
