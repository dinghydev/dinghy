import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_GROUPED_RESPONSIVE = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.rrect;rSize=10;fillColor=#42526E;strokeColor=#ffffff;strokeWidth=2;fontSize=12;fontColor=#ffffff;fontStyle=0;whiteSpace=wrap;',
  },
  _width: 3,
  _height: 104,
}

export function ButtonGroupedResponsive(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_GROUPED_RESPONSIVE}
      {...props}
      _style={extendStyle(BUTTON_GROUPED_RESPONSIVE, props)}
    />
  )
}
