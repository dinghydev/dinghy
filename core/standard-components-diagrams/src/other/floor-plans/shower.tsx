import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHOWER = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.shower2;',
  _width: 100,
  _height: 100,
}

export function Shower(props: DiagramNodeProps) {
  return <Shape {...SHOWER} {...props} />
}
