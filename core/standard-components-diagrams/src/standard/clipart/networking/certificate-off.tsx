import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CERTIFICATE_OFF = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Certificate_Off_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
