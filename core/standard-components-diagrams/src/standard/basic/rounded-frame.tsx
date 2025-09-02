import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROUNDED_FRAME = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.rounded_frame;dx=10;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function RoundedFrame(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROUNDED_FRAME}
      {...props}
      _style={extendStyle(ROUNDED_FRAME, props)}
    />
  )
}
