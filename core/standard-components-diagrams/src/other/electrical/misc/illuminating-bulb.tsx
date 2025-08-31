import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ILLUMINATING_BULB = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.illuminating_bulb;',
  _width: 60,
  _height: 50,
}

export function IlluminatingBulb(props: DiagramNodeProps) {
  return (
    <Shape
      {...ILLUMINATING_BULB}
      {...props}
      _style={extendStyle(ILLUMINATING_BULB, props)}
    />
  )
}
