import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INDUCTOR_AIR_CORE_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.inductor_5;',
  },
  _original_width: 100,
  _original_height: 14,
}

export function InductorAirCore2(props: DiagramNodeProps) {
  return (
    <Shape
      {...INDUCTOR_AIR_CORE_2}
      {...props}
      _style={extendStyle(INDUCTOR_AIR_CORE_2, props)}
    />
  )
}
