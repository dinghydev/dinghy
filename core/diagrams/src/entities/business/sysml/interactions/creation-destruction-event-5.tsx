import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CREATION_DESTRUCTION_EVENT_5 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;endArrow=open;elbow=vertical;endSize=12;html=1;rounded=0;',
  },
  _width: 9,
  _height: 220,
}

export function CreationDestructionEvent5(props: NodeProps) {
  return (
    <Shape
      {...CREATION_DESTRUCTION_EVENT_5}
      {...props}
      _style={extendStyle(CREATION_DESTRUCTION_EVENT_5, props)}
    />
  )
}
