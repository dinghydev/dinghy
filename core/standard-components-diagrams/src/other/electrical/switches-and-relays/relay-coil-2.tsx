import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RELAY_COIL_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.relay_coil_2;',
  },
  _original_width: 100,
  _original_height: 70,
}

export function RelayCoil2(props: DiagramNodeProps) {
  return (
    <Shape
      {...RELAY_COIL_2}
      {...props}
      _style={extendStyle(RELAY_COIL_2, props)}
    />
  )
}
