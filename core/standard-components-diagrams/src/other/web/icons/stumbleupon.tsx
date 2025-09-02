import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STUMBLEUPON = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.stumbleupon;fillColor=#FA823C;gradientColor=#E12110',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Stumbleupon(props: DiagramNodeProps) {
  return (
    <Shape
      {...STUMBLEUPON}
      {...props}
      _style={extendStyle(STUMBLEUPON, props)}
    />
  )
}
