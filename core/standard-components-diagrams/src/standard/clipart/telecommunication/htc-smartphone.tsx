import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HTC_SMARTPHONE = {
  _style:
    'image;html=1;image=img/lib/clip_art/telecommunication/HTC_smartphone_128x128.png',
  _width: 80,
  _height: 80,
}

export function HtcSmartphone(props: DiagramNodeProps) {
  return <Shape {...HTC_SMARTPHONE} {...props} />
}
