import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TOOLTIP_ON_LEFT = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.popover;fillColor=#1A1A1A;strokeColor=none;dx=12;dy=5;rSize=5;whiteSpace=wrap;verticalAlign=top;spacing=10;fontSize=12;spacingLeft=0;align=center;spacingTop=-10;fontColor=#FFFFFF;direction=north;spacingRight=5;',
  },
  _original_width: 0,
  _original_height: 30,
}

export function TooltipOnLeft(props: DiagramNodeProps) {
  return (
    <Shape
      {...TOOLTIP_ON_LEFT}
      {...props}
      _style={extendStyle(TOOLTIP_ON_LEFT, props)}
    />
  )
}
