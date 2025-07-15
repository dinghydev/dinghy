import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARROWHEAD = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.arrowhead2;fillColor=#000000;aspect=fixed;',
  _width: 19,
  _height: 11,
}

export function Arrowhead(props: DiagramNodeProps) {
  return <Shape {...ARROWHEAD} {...props} />
}
