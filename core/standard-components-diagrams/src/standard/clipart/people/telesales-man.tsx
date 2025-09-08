import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TELESALES_MAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Telesales_Man_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function TelesalesMan(props: DiagramNodeProps) {
  return (
    <Shape
      {...TELESALES_MAN}
      {...props}
      _style={extendStyle(TELESALES_MAN, props)}
    />
  )
}
