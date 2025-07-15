import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COUCH = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.couch;',
  _width: 150,
  _height: 80,
}

export function Couch(props: DiagramNodeProps) {
  return <Shape {...COUCH} {...props} />
}
