import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VERTICAL_TAB_BAR = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.containers.marginRect2;rectMarginLeft=67;strokeColor=#666666;gradientColor=none;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 200,
}

export function VerticalTabBar(props: NodeProps) {
  return (
    <Shape
      {...VERTICAL_TAB_BAR}
      {...props}
      _style={extendStyle(VERTICAL_TAB_BAR, props)}
    />
  )
}
