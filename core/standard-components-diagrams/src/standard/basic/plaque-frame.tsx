import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLAQUE_FRAME = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.plaque_frame;dx=10;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function PlaqueFrame(props: DiagramNodeProps) {
  return (
    <Shape
      {...PLAQUE_FRAME}
      {...props}
      _style={extendStyle(PLAQUE_FRAME, props)}
    />
  )
}
