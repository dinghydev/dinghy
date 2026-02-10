import { useEffect, useState } from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly'

export default function LatestVersion() {
  const [latestVersion, setLatestVersion] = useState('')
  useEffect(() => {
    fetch(`https://get.dinghy.dev/latest-version.json`)
      .then((response) => response.json())
      .then((data) => {
        setLatestVersion(data.latest)
      })
      .catch((error) => {
        console.error('Error fetching latest version:', error)
      })
  }, [])
  return (
    <BrowserOnly fallback={<code>latest</code>}>
      {() => (
        <div>
          <code>latest</code>
          <div>{latestVersion}</div>
        </div>
      )}
    </BrowserOnly>
  )
}
