import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REFERENCE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.reference2;fillColor=#2d6195;strokeColor=none;aspect=fixed;',
  _width: 29.5,
  _height: 19.5,
}

export function Reference(props: DiagramNodeProps) {
  return <Shape {...REFERENCE} {...props} />
}
