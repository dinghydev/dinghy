import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIEWING_GLASS = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.viewing_glass;',
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
