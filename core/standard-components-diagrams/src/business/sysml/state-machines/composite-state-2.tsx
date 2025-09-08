import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPOSITE_STATE_2 = {
  _style: {
    entity:
      'shape=mxgraph.sysml.compState;html=1;align=left;verticalAlign=top;spacingTop=-3;spacingLeft=18;',
  },
  _original_width: 200,
  _original_height: 160,
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
