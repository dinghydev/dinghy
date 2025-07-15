import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROCESS_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.process;',
  _width: 60,
  _height: 35,
}

export function Process2(props: DiagramNodeProps) {
  return <Shape {...PROCESS_2} {...props} />
}
