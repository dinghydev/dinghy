import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REFRIGERATOR = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.refrigerator;',
  _width: 60,
  _height: 62,
}

export function Refrigerator(props: DiagramNodeProps) {
  return <Shape {...REFRIGERATOR} {...props} />
}
