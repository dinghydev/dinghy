import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HORIZONTAL_TAB_BAR = {
  _style:
    'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.containers.marginRect2;rectMarginTop=32;strokeColor=#666666;gradientColor=none;whiteSpace=wrap;',
  _width: 0,
  _height: 200,
}

export function HorizontalTabBar(props: DiagramNodeProps) {
  return <Shape {...HORIZONTAL_TAB_BAR} {...props} />
}
