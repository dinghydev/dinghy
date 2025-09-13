import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VERTICAL_SCROLL_BAR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.navigation.scrollBar;strokeColor=#999999;barPos=20;fillColor2=#99ddff;strokeColor2=none;direction=north;',
  },
  _width: 20,
  _height: 200,
}

export function VerticalScrollBar(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERTICAL_SCROLL_BAR}
      {...props}
      _style={extendStyle(VERTICAL_SCROLL_BAR, props)}
    />
  )
}
