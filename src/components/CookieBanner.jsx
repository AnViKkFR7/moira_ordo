import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

const CONSENT_KEY = 'moiraCookieConsent'

const defaultConsent = {
  necessary: true,
  analytics: false,
  marketing: false
}

const getStoredConsent = () => {
  try {
    const stored = localStorage.getItem(CONSENT_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

function CookieBanner() {
  const { t } = useLanguage()
  const [storedConsent, setStoredConsent] = useState(null)
  const [draftConsent, setDraftConsent] = useState(defaultConsent)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setStoredConsent(getStoredConsent())
  }, [])

  const saveConsent = (nextConsent) => {
    const normalized = {
      necessary: true,
      analytics: Boolean(nextConsent.analytics),
      marketing: Boolean(nextConsent.marketing)
    }

    localStorage.setItem(CONSENT_KEY, JSON.stringify(normalized))
    setStoredConsent(normalized)
    setIsOpen(false)
  }

  const openPreferences = () => {
    setDraftConsent(storedConsent || defaultConsent)
    setIsOpen(true)
  }

  if (storedConsent) {
    return null
  }

  return (
    <>
      <div className="cookie-banner">
        <div className="cookie-banner-content">
          <div>
            <h3>{t('cookieBanner.title')}</h3>
            <p>{t('cookieBanner.description')}</p>
            <Link to="/cookies" className="cookie-link">
              {t('cookieBanner.policyLink')}
            </Link>
          </div>
          <div className="cookie-actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => saveConsent(defaultConsent)}
            >
              {t('cookieBanner.reject')}
            </button>
            <button
              type="button"
              className="btn-secondary"
              onClick={openPreferences}
            >
              {t('cookieBanner.configure')}
            </button>
            <button
              type="button"
              className="btn-primary"
              onClick={() => saveConsent({ necessary: true, analytics: true, marketing: true })}
            >
              {t('cookieBanner.accept')}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="cookie-modal">
          <div className="cookie-modal-card">
            <div className="cookie-modal-header">
              <h3>{t('cookieBanner.title')}</h3>
              <button
                type="button"
                className="cookie-close"
                onClick={() => setIsOpen(false)}
                aria-label={t('cookieBanner.close')}
              >
                ✕
              </button>
            </div>

            <div className="cookie-options">
              <div className="cookie-option">
                <div>
                  <h4>{t('cookieBanner.necessary')}</h4>
                  <p>{t('cookieBanner.necessaryHelp')}</p>
                </div>
                <input type="checkbox" checked readOnly />
              </div>
              <div className="cookie-option">
                <div>
                  <h4>{t('cookieBanner.analytics')}</h4>
                  <p>{t('cookieBanner.analyticsHelp')}</p>
                </div>
                <input
                  type="checkbox"
                  onChange={(event) =>
                    setDraftConsent((prev) => ({
                      ...(prev || defaultConsent),
                      analytics: event.target.checked
                    }))
                  }
                  checked={draftConsent.analytics}
                />
              </div>
              <div className="cookie-option">
                <div>
                  <h4>{t('cookieBanner.marketing')}</h4>
                  <p>{t('cookieBanner.marketingHelp')}</p>
                </div>
                <input
                  type="checkbox"
                  onChange={(event) =>
                    setDraftConsent((prev) => ({
                      ...(prev || defaultConsent),
                      marketing: event.target.checked
                    }))
                  }
                  checked={draftConsent.marketing}
                />
              </div>
            </div>

            <div className="cookie-modal-actions">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => saveConsent(defaultConsent)}
              >
                {t('cookieBanner.reject')}
              </button>
              <button
                type="button"
                className="btn-primary"
                onClick={() => saveConsent(draftConsent)}
              >
                {t('cookieBanner.save')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CookieBanner
