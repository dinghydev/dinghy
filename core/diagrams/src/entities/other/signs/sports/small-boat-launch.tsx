import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SMALL_BOAT_LAUNCH = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.small_boat_launch;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 100,
  _original_height: 93,
}

export function SmallBoatLaunch(props: NodeProps) {
  return (
    <Shape
      {...SMALL_BOAT_LAUNCH}
      {...props}
      _style={extendStyle(SMALL_BOAT_LAUNCH, props)}
    />
  )
}
