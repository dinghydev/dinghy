import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STAIRS_3 = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.stairsRest;',
  _width: 300,
  _height: 200,
}

export function Stairs3(props: DiagramNodeProps) {
  return <Shape {...STAIRS_3} {...props} />
}
