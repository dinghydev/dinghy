import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FINAL_STATE_NODE = {
  _style: {
    entity: 'ellipse;html=1;shape=endState;fillColor=strokeColor;',
  },
  _original_width: 30,
  _original_height: 30,
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
