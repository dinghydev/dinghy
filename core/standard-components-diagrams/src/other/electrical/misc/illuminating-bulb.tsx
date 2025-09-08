import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ILLUMINATING_BULB = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.illuminating_bulb;',
  },
  _original_width: 60,
  _original_height: 50,
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
