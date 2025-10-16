import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HORIZONTAL_SCROLL_BAR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.navigation.scrollBar;strokeColor=#999999;barPos=20;fillColor2=#99ddff;strokeColor2=none;',
  },
  _width: 200,
  _height: 20,
}

export function HorizontalScrollBar(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_SCROLL_BAR}
      {...props}
      _style={extendStyle(HORIZONTAL_SCROLL_BAR, props)}
    />
  )
}
