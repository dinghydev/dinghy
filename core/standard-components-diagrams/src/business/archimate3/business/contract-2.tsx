import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTRACT_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.contract;',
  _width: 70,
  _height: 40,
}

export function Contract2(props: DiagramNodeProps) {
  return <Shape {...CONTRACT_2} {...props} />
}
