import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPOSITE_STATE = {
  _style:
    'shape=mxgraph.sysml.compState;align=left;verticalAlign=top;spacingTop=-3;spacingLeft=18;strokeWidth=1;recursiveResize=0;html=1;',
  _width: 0,
  _height: 190,
}

export function CompositeState(props: DiagramNodeProps) {
  return <Shape {...COMPOSITE_STATE} {...props} />
}
