import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPOSITE_STATE_2 = {
  _style: {
    entity:
      'shape=mxgraph.sysml.compState;html=1;align=left;verticalAlign=top;spacingTop=-3;spacingLeft=18;',
  },
  _width: 200,
  _height: 160,
}

export function CompositeState2(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPOSITE_STATE_2}
      {...props}
      _style={extendStyle(COMPOSITE_STATE_2, props)}
    />
  )
}
