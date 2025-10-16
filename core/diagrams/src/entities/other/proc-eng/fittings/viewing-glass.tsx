import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIEWING_GLASS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.viewing_glass;',
  },
  _width: 100,
  _height: 50,
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
