import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INDUCTOR_AIR_CORE_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.inductor_5;',
  },
  _width: 100,
  _height: 14,
}

export function InductorAirCore2(props: NodeProps) {
  return (
    <Shape
      {...INDUCTOR_AIR_CORE_2}
      {...props}
      _style={extendStyle(INDUCTOR_AIR_CORE_2, props)}
    />
  )
}
