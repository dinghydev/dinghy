import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AIR_FREIGHT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.airplane_7;',
  },
  _width: 100,
  _height: 45,
}

export function AirFreight(props: DiagramNodeProps) {
  return (
    <Shape
      {...AIR_FREIGHT}
      {...props}
      _style={extendStyle(AIR_FREIGHT, props)}
    />
  )
}
