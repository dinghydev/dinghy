import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HORIZONTAL_RULER_2 = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.misc.ruler2;dx=100;rulerOrient=up;unitSize=10;fontColor=#999999;spacingLeft=96;align=left;verticalAlign=middle;spacingBottom=0;spacingTop=10;spacingRight=0;spacing=0;strokeColor=#999999;',
  },
  _width: 350,
  _height: 30,
}

export function HorizontalRuler2(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_RULER_2}
      {...props}
      _style={extendStyle(HORIZONTAL_RULER_2, props)}
    />
  )
}
