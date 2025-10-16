import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RELATION_2 = {
  _style: {
    entity:
      'verticalAlign=bottom;html=1;endArrow=none;startArrow=none;startSize=14;startFill=0;edgeStyle=orthogonalEdgeStyle;',
  },
  _width: 160,
  _height: 0,
}

export function Relation2(props: DiagramNodeProps) {
  return (
    <Shape {...RELATION_2} {...props} _style={extendStyle(RELATION_2, props)} />
  )
}
