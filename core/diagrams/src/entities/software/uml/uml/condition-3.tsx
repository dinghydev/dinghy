import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONDITION_3 = {
  _style: {
    entity:
      'edgeStyle=orthogonalEdgeStyle;html=1;align=left;verticalAlign=top;endArrow=open;endSize=8;strokeColor=#ff0000;',
  },
  _width: 2,
  _height: 100,
}

export function Condition3(props: NodeProps) {
  return (
    <Shape
      {...CONDITION_3}
      {...props}
      _style={extendStyle(CONDITION_3, props)}
    />
  )
}
