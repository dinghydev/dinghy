import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIGHT_BULB = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.light_bulb;',
  },
  _original_width: 60,
  _original_height: 50,
}

export function LightBulb(props: DiagramNodeProps) {
  return (
    <Shape {...LIGHT_BULB} {...props} _style={extendStyle(LIGHT_BULB, props)} />
  )
}
