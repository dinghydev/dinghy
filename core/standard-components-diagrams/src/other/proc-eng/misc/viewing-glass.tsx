import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIEWING_GLASS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.viewing_glass;',
  },
  _original_width: 80,
  _original_height: 50,
}

export function ViewingGlass(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIEWING_GLASS}
      {...props}
      _style={extendStyle(VIEWING_GLASS, props)}
    />
  )
}
