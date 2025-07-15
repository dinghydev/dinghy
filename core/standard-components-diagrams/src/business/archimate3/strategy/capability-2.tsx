import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CAPABILITY_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.capability;',
  _width: 40,
  _height: 40,
}

export function Capability2(props: DiagramNodeProps) {
  return <Shape {...CAPABILITY_2} {...props} />
}
