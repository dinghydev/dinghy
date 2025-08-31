import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RIBBON_ROLLED = {
  _style:
    'html=1;shape=mxgraph.infographic.ribbonRolled;dx=185;dy=15;fillColor=#10739E;strokeColor=none;align=center;verticalAlign=middle;fontColor=#ffffff;fontSize=14;fontStyle=1;',
  _width: 200,
  _height: 70,
}

export function RibbonRolled(props: DiagramNodeProps) {
  return (
    <Shape
      {...RIBBON_ROLLED}
      {...props}
      _style={extendStyle(RIBBON_ROLLED, props)}
    />
  )
}
