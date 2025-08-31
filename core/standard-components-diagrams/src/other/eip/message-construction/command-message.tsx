import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMAND_MESSAGE = {
  _style:
    'edgeStyle=orthogonalEdgeStyle;rounded=0;exitX=0;exitY=0.5;endArrow=none;dashed=0;html=1;strokeColor=#808080;strokeWidth=2;',
  _width: 0,
  _height: 30,
}

export function CommandMessage(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMMAND_MESSAGE}
      {...props}
      _style={extendStyle(COMMAND_MESSAGE, props)}
    />
  )
}
