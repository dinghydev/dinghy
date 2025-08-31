import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPOSITE_STATE = {
  _style: {
    entity:
      'shape=mxgraph.sysml.compState;align=left;verticalAlign=top;spacingTop=-3;spacingLeft=18;strokeWidth=1;recursiveResize=0;html=1;',
  },
  _width: 0,
  _height: 190,
}

export function CompositeState(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPOSITE_STATE}
      {...props}
      _style={extendStyle(COMPOSITE_STATE, props)}
    />
  )
}
