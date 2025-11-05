import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIEWING_GLASS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.viewing_glass;',
  },
  _width: 80,
  _height: 50,
}

export function ViewingGlass(props: NodeProps) {
  return (
    <Shape
      {...VIEWING_GLASS}
      {...props}
      _style={extendStyle(VIEWING_GLASS, props)}
    />
  )
}
