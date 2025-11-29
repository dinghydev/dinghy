import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPOSITE_STATE = {
  _style: {
    entity:
      'shape=mxgraph.sysml.compState;align=left;verticalAlign=top;spacingTop=-3;spacingLeft=18;strokeWidth=1;recursiveResize=0;html=1;',
  },
  _width: 0,
  _height: 190,
}

export function CompositeState(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COMPOSITE_STATE)} />
}
