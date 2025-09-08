import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PRINCIPLE_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.principle;strokeWidth=2;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function Principle2(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRINCIPLE_2}
      {...props}
      _style={extendStyle(PRINCIPLE_2, props)}
    />
  )
}
