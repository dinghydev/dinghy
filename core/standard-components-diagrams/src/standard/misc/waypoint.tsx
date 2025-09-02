import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WAYPOINT = {
  _style: {
    entity:
      'shape=waypoint;sketch=0;fillStyle=solid;size=6;pointerEvents=1;points=[];fillColor=none;resizable=0;rotatable=0;perimeter=centerPerimeter;snapToPoint=1;',
  },
  _original_width: 20,
  _original_height: 20,
}

export function Waypoint(props: DiagramNodeProps) {
  return (
    <Shape {...WAYPOINT} {...props} _style={extendStyle(WAYPOINT, props)} />
  )
}
