import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PLATEAU = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.tech;techType=plateau',
  _width: 100,
  _height: 75,
}

export function Plateau(props: DiagramNodeProps) {
  return <Shape {...PLATEAU} {...props} />
}
