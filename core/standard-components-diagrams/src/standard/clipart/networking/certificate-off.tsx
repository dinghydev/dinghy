import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CERTIFICATE_OFF = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Certificate_Off_128x128.png',
  _width: 80,
  _height: 80,
}

export function CertificateOff(props: DiagramNodeProps) {
  return <Shape {...CERTIFICATE_OFF} {...props} />
}
