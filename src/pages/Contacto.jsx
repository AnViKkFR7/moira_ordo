import { useState } from 'react'
import '../App.css'
import { useLanguage } from '../i18n/LanguageContext'

function Contacto() {
  const { t, language } = useLanguage()
  const benefits = t('contacto.why.benefits')
  const projectTypes = t('contacto.form.projectTypes')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.target)
    const projectTypeValue = formData.get('projectType')?.toString() ?? ''
    const projectTypeLabel =
      projectTypes.find((option) => option.value === projectTypeValue)?.label ?? projectTypeValue

    const payload = {
      name: formData.get('name')?.toString() ?? '',
      email: formData.get('email')?.toString() ?? '',
      phone: formData.get('phone')?.toString() ?? '',
      company: formData.get('company')?.toString() ?? '',
      projectType: {
        value: projectTypeValue,
        label: projectTypeLabel
      },
      message: formData.get('message')?.toString() ?? '',
      language
    }

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase configuration.')
      setStatus('error')
      return
    }

    try {
      const response = await fetch(`${supabaseUrl}/functions/v1/moira-ordo-contact-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${supabaseKey}`,
          apikey: supabaseKey
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Contact form submission failed.', errorText)
        setStatus('error')
        return
      }

      console.log('Formulario enviado')
      e.target.reset()
      setStatus('success')
    } catch (error) {
      console.error('Contact form submission failed.', error)
      setStatus('error')
    }
  }

  return (
    <>
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">{t('contacto.hero.title')}</h1>
          <p className="contact-subtitle">
            {t('contacto.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>{t('contacto.why.title')}</h2>
              <ul className="contact-benefits">
                {benefits.map((benefit) => (
                  <li key={benefit.title}>
                    <span className="benefit-icon">✓</span>
                    <div>
                      <strong>{benefit.title}</strong>
                      <p>{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="contact-details">
                <h3>{t('contacto.details.title')}</h3>
                <p>
                  <strong>{t('contacto.details.emailLabel')}:</strong> hola@moiraordo.com
                </p>
                <p>
                  <strong>{t('contacto.details.hoursLabel')}:</strong> {t('contacto.details.hours')}
                </p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t('contacto.form.nameLabel')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={t('contacto.form.namePlaceholder')}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('contacto.form.emailLabel')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={t('contacto.form.emailPlaceholder')}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t('contacto.form.phoneLabel')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t('contacto.form.phonePlaceholder')}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">{t('contacto.form.companyLabel')}</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder={t('contacto.form.companyPlaceholder')}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="projectType">{t('contacto.form.projectTypeLabel')}</label>
                  <select id="projectType" name="projectType" required>
                    <option value="">{t('contacto.form.projectTypePlaceholder')}</option>
                    {projectTypes.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('contacto.form.messageLabel')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    placeholder={t('contacto.form.messagePlaceholder')}
                  ></textarea>
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" required />
                    <span>
                      {t('contacto.form.privacyLabel')}
                    </span>
                  </label>
                </div>

                <button type="submit" className="btn-primary large">
                  {t('contacto.form.submit')}
                </button>

                {status !== 'idle' && (
                  <p className={`form-status ${status}`} aria-live="polite">
                    {t(`contacto.form.status.${status}`)}
                  </p>
                )}

                <p className="form-note">
                  {t('contacto.form.note')}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacto
