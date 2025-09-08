import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INDUCTOR_AIR_CORE_3 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.inductor_1;',
  },
  _original_width: 100,
  _original_height: 15,
}

export function InductorAirCore3(props: DiagramNodeProps) {
  return (
    <Shape
      {...INDUCTOR_AIR_CORE_3}
      {...props}
      _style={extendStyle(INDUCTOR_AIR_CORE_3, props)}
    />
  )
}
