import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WAYPOINT = {
  _style: {
    entity:
      'shape=waypoint;sketch=0;fillStyle=solid;size=6;pointerEvents=1;points=[];fillColor=none;resizable=0;rotatable=0;perimeter=centerPerimeter;snapToPoint=1;',
  },
  _original_width: 20,
  _original_height: 20,
}

export function Waypoint(props: NodeProps) {
  return (
    <Shape {...WAYPOINT} {...props} _style={extendStyle(WAYPOINT, props)} />
  )
}
