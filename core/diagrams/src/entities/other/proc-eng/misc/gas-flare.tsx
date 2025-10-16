import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GAS_FLARE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.gas_flare;',
  },
  _width: 60,
  _height: 100,
}

export function GasFlare(props: DiagramNodeProps) {
  return (
    <Shape {...GAS_FLARE} {...props} _style={extendStyle(GAS_FLARE, props)} />
  )
}
