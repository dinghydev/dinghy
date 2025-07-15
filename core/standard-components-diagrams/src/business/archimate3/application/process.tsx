import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROCESS = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.process;',
  _width: 60,
  _height: 30,
}

export function Process(props: DiagramNodeProps) {
  return <Shape {...PROCESS} {...props} />
}
