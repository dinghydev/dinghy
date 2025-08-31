import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONDITION_3 = {
  _style:
    'edgeStyle=orthogonalEdgeStyle;html=1;align=left;verticalAlign=top;endArrow=open;endSize=8;strokeColor=#ff0000;',
  _width: 2,
  _height: 100,
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
