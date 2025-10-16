import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CERTIFICATE_OFF = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Certificate_Off_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function CertificateOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...CERTIFICATE_OFF}
      {...props}
      _style={extendStyle(CERTIFICATE_OFF, props)}
    />
  )
}
