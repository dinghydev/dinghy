import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RIBBON_FRONT_FOLDED = {
  _style:
    'html=1;shape=mxgraph.infographic.ribbonFrontFolded;dx=25;dy=15;notch=15;fillColor=#10739E;strokeColor=none;align=center;verticalAlign=middle;fontColor=#ffffff;fontSize=14;fontStyle=1;spacingTop=10;',
  _width: 200,
  _height: 55.00000000000001,
}

export function RibbonFrontFolded(props: DiagramNodeProps) {
  return (
    <Shape
      {...RIBBON_FRONT_FOLDED}
      {...props}
      _style={extendStyle(RIBBON_FRONT_FOLDED, props)}
    />
  )
}
