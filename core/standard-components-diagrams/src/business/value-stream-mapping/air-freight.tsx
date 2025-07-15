import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AIR_FREIGHT = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.airplane_7;',
  _width: 100,
  _height: 45,
}

export function AirFreight(props: DiagramNodeProps) {
  return <Shape {...AIR_FREIGHT} {...props} />
}
