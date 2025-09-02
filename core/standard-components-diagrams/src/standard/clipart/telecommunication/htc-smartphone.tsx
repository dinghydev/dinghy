import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HTC_SMARTPHONE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/telecommunication/HTC_smartphone_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function HtcSmartphone(props: DiagramNodeProps) {
  return (
    <Shape
      {...HTC_SMARTPHONE}
      {...props}
      _style={extendStyle(HTC_SMARTPHONE, props)}
    />
  )
}
