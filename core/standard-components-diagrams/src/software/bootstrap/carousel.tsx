import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CAROUSEL = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;strokeColor=none;strokeWidth=1;fillColor=#777777;fontColor=#555555;whiteSpace=wrap;align=center;verticalAlign=middle;fontStyle=0;fontSize=40;',
  },
  _original_width: 800,
  _original_height: 300,
}

export function Carousel(props: DiagramNodeProps) {
  return (
    <Shape {...CAROUSEL} {...props} _style={extendStyle(CAROUSEL, props)} />
  )
}
