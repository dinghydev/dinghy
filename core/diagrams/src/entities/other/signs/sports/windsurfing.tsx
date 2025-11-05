import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WINDSURFING = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.windsurfing;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 98,
}

export function Windsurfing(props: NodeProps) {
  return (
    <Shape
      {...WINDSURFING}
      {...props}
      _style={extendStyle(WINDSURFING, props)}
    />
  )
}
