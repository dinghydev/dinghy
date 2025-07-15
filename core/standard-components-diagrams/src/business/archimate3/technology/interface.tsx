import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTERFACE = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.interface;',
  _width: 70,
  _height: 35,
}

export function Interface(props: DiagramNodeProps) {
  return <Shape {...INTERFACE} {...props} />
}
