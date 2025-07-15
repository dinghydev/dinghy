import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIREPLACE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.fireplace;',
  _width: 304,
  _height: 200,
}

export function Fireplace(props: DiagramNodeProps) {
  return <Shape {...FIREPLACE} {...props} />
}
