import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RELAY_COIL = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.relay_coil;',
  },
  _original_width: 70,
  _original_height: 35,
}

export function RelayCoil(props: DiagramNodeProps) {
  return (
    <Shape {...RELAY_COIL} {...props} _style={extendStyle(RELAY_COIL, props)} />
  )
}
