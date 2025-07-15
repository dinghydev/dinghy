import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESOURCE_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.resource;',
  _width: 60,
  _height: 40,
}

export function Resource2(props: DiagramNodeProps) {
  return <Shape {...RESOURCE_2} {...props} />
}
