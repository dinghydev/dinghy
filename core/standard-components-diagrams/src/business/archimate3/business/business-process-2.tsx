import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUSINESS_PROCESS_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.process;',
  _width: 60,
  _height: 30,
}

export function BusinessProcess2(props: DiagramNodeProps) {
  return <Shape {...BUSINESS_PROCESS_2} {...props} />
}
