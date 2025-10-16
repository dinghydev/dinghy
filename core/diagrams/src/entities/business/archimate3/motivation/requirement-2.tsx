import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REQUIREMENT_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.requirement;',
  },
  _width: 70,
  _height: 35,
}

export function Requirement2(props: DiagramNodeProps) {
  return (
    <Shape
      {...REQUIREMENT_2}
      {...props}
      _style={extendStyle(REQUIREMENT_2, props)}
    />
  )
}
