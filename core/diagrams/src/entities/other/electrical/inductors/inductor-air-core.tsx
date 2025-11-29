import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INDUCTOR_AIR_CORE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.inductor_3;',
  },
  _width: 100,
  _height: 8,
}

export function InductorAirCore(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INDUCTOR_AIR_CORE)} />
}
