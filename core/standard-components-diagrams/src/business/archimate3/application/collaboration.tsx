import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COLLABORATION = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.collaboration;',
  _width: 60,
  _height: 35,
}

export function Collaboration(props: DiagramNodeProps) {
  return <Shape {...COLLABORATION} {...props} />
}
