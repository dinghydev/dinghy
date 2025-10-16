import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ICE_SKATING = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.ice_skating;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 95,
  _original_height: 100,
}

export function IceSkating(props: DiagramNodeProps) {
  return (
    <Shape
      {...ICE_SKATING}
      {...props}
      _style={extendStyle(ICE_SKATING, props)}
    />
  )
}
