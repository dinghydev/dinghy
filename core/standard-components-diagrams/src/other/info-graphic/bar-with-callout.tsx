import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BAR_WITH_CALLOUT = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.barCallout;dx=100;dy=30;fillColor=#10739E;strokeColor=none;align=center;verticalAlign=top;fontColor=#ffffff;fontSize=14;fontStyle=1;shadow=0;spacingTop=5;',
  },
  _original_width: 200,
  _original_height: 70,
}

export function BarWithCallout(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_WITH_CALLOUT}
      {...props}
      _style={extendStyle(BAR_WITH_CALLOUT, props)}
    />
  )
}
