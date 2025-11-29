import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIGHT_BULB = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.light_bulb;',
  },
  _original_width: 60,
  _original_height: 50,
}

export function LightBulb(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LIGHT_BULB)} />
}
