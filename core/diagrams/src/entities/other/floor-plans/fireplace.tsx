import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FIREPLACE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.fireplace;',
  },
  _width: 304,
  _height: 200,
}

export function Fireplace(props: NodeProps) {
  return (
    <Shape {...FIREPLACE} {...props} _style={extendStyle(FIREPLACE, props)} />
  )
}
