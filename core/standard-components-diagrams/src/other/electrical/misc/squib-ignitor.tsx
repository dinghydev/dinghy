import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SQUIB_IGNITOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.squib_ignitor',
  },
  _width: 60,
  _height: 60,
}

export function SquibIgnitor(props: DiagramNodeProps) {
  return (
    <Shape
      {...SQUIB_IGNITOR}
      {...props}
      _style={extendStyle(SQUIB_IGNITOR, props)}
    />
  )
}
