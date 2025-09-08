import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VERTICAL_RULER_2 = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.misc.ruler2;dx=100;rulerOrient=up;unitSize=10;fontColor=#999999;spacingLeft=96;align=left;verticalAlign=middle;spacingBottom=0;spacingTop=10;spacingRight=0;rotation=-90;spacing=0;strokeColor=#999999;',
  },
  _original_width: 350,
  _original_height: 30,
}

export function VerticalRuler2(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERTICAL_RULER_2}
      {...props}
      _style={extendStyle(VERTICAL_RULER_2, props)}
    />
  )
}
