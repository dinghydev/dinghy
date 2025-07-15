import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COPIER = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.copier;',
  _width: 110,
  _height: 60,
}

export function Copier(props: DiagramNodeProps) {
  return <Shape {...COPIER} {...props} />
}
