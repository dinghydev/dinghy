import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HORIZONTAL_TAB_BAR = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.containers.marginRect2;rectMarginTop=32;strokeColor=#666666;gradientColor=none;whiteSpace=wrap;',
  },
  _original_width: 0,
  _original_height: 200,
}

export function HorizontalTabBar(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_TAB_BAR}
      {...props}
      _style={extendStyle(HORIZONTAL_TAB_BAR, props)}
    />
  )
}
