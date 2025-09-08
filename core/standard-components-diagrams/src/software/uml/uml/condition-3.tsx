import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONDITION_3 = {
  _style: {
    entity:
      'edgeStyle=orthogonalEdgeStyle;html=1;align=left;verticalAlign=top;endArrow=open;endSize=8;strokeColor=#ff0000;',
  },
  _original_width: 2,
  _original_height: 100,
}

export function Condition3(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONDITION_3}
      {...props}
      _style={extendStyle(CONDITION_3, props)}
    />
  )
}
