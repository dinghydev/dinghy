import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RIBBON_DOUBLE_FOLDED = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.ribbonDoubleFolded;dx=25;dy=15;fillColor=#10739E;strokeColor=none;align=center;verticalAlign=middle;fontColor=#ffffff;fontSize=14;fontStyle=1;',
  },
  _original_width: 200,
  _original_height: 70,
}

export function RibbonDoubleFolded(props: DiagramNodeProps) {
  return (
    <Shape
      {...RIBBON_DOUBLE_FOLDED}
      {...props}
      _style={extendStyle(RIBBON_DOUBLE_FOLDED, props)}
    />
  )
}
