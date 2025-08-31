import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOOR_LOCK = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.door_lock;fillColor=#5294CF;gradientColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function DoorLock(props: DiagramNodeProps) {
  return (
    <Shape {...DOOR_LOCK} {...props} _style={extendStyle(DOOR_LOCK, props)} />
  )
}
