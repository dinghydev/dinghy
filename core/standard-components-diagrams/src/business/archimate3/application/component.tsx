import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.component;',
  _width: 48,
  _height: 40,
}

export function Component(props: DiagramNodeProps) {
  return <Shape {...COMPONENT} {...props} />
}
