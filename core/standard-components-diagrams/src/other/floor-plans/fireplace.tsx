import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FIREPLACE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.fireplace;',
  },
  _original_width: 304,
  _original_height: 200,
}

export function Fireplace(props: DiagramNodeProps) {
  return (
    <Shape {...FIREPLACE} {...props} _style={extendStyle(FIREPLACE, props)} />
  )
}
