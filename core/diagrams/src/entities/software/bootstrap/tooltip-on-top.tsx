import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TOOLTIP_ON_TOP = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.popover;fillColor=#1A1A1A;strokeColor=none;dx=45;dy=5;rSize=5;whiteSpace=wrap;verticalAlign=top;spacing=10;fontSize=12;spacingLeft=0;align=center;spacingTop=-10;fontColor=#FFFFFF;',
  },
  _width: 0,
  _height: 60,
}

export function TooltipOnTop(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TOOLTIP_ON_TOP)} />
}
