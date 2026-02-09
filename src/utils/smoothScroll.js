export function smoothScrollToId(sectionId, options = {}) {
  const {
    duration = 700,
    offset = 92
  } = options

  const target = document.getElementById(sectionId)
  if (!target) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const startY = window.scrollY
  const targetY = target.getBoundingClientRect().top + window.scrollY - offset
  const distance = targetY - startY

  if (prefersReducedMotion || Math.abs(distance) < 2) {
    window.scrollTo(0, targetY)
    return
  }

  const easeInOutCubic = t => {
    if (t < 0.5) return 4 * t * t * t
    return 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  const startTime = performance.now()

  const animate = currentTime => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeInOutCubic(progress)
    window.scrollTo(0, startY + distance * eased)

    if (progress < 1) {
      window.requestAnimationFrame(animate)
    }
  }

  window.requestAnimationFrame(animate)
}
