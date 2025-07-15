import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REPRESENTATION = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.representation',
  _width: 100,
  _height: 75,
}

export function Representation(props: DiagramNodeProps) {
  return <Shape {...REPRESENTATION} {...props} />
}
