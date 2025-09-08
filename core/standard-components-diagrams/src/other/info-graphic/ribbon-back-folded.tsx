import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RIBBON_BACK_FOLDED = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.ribbonBackFolded;dx=25;dy=15;notch=15;fillColor=#10739E;strokeColor=none;align=center;verticalAlign=middle;fontColor=#ffffff;fontSize=14;fontStyle=1;spacingTop=10;',
  },
  _original_width: 200,
  _original_height: 55.00000000000001,
}

export function RibbonBackFolded(props: DiagramNodeProps) {
  return (
    <Shape
      {...RIBBON_BACK_FOLDED}
      {...props}
      _style={extendStyle(RIBBON_BACK_FOLDED, props)}
    />
  )
}
