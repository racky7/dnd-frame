import { useEffect, useState } from 'react'

export function useInjectStyles() {
  const [styleContent, setStyleContent] = useState('')

  useEffect(function getStylesOnMount() {
    let observer: MutationObserver

    function handleStylesChange() {
      const styleSheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
        .map((item) => item.outerHTML)
        .join('\n')
      setStyleContent(styleSheets)
    }

    if (typeof window !== 'undefined') {
      handleStylesChange()

      observer = new MutationObserver(handleStylesChange)
      observer.observe(document.head, { subtree: true, childList: true })
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  return styleContent
}
