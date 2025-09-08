import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WEDGE_BAR_2 = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.forms.uRect;fontSize=17;fontColor=#ffffff;align=left;spacingLeft=5;strokeColor=#008cff;fillColor=#008cff;',
  },
  _original_width: 1,
  _original_height: 30,
}

export function WedgeBar2(props: DiagramNodeProps) {
  return (
    <Shape
      {...WEDGE_BAR_2}
      {...props}
      _style={extendStyle(WEDGE_BAR_2, props)}
    />
  )
}
