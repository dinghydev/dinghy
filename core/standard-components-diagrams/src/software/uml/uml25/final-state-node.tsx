import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FINAL_STATE_NODE = {
  _style: 'ellipse;html=1;shape=endState;fillColor=strokeColor;',
  _width: 30,
  _height: 30,
}

export function FinalStateNode(props: DiagramNodeProps) {
  return (
    <Shape
      {...FINAL_STATE_NODE}
      {...props}
      _style={extendStyle(FINAL_STATE_NODE, props)}
    />
  )
}
