import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPOSITE_STATE_2 = {
  _style:
    'shape=mxgraph.sysml.compState;html=1;align=left;verticalAlign=top;spacingTop=-3;spacingLeft=18;',
  _width: 200,
  _height: 160,
}

export function CompositeState2(props: DiagramNodeProps) {
  return <Shape {...COMPOSITE_STATE_2} {...props} />
}
