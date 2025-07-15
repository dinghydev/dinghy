import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTERFACE_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.interface;',
  _width: 70,
  _height: 35,
}

export function Interface2(props: DiagramNodeProps) {
  return <Shape {...INTERFACE_2} {...props} />
}
