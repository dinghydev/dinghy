import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONVEYOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid2misc.conveyor',
  },
  _width: 200,
  _height: 50,
}

export function Conveyor(props: DiagramNodeProps) {
  return (
    <Shape {...CONVEYOR} {...props} _style={extendStyle(CONVEYOR, props)} />
  )
}
