import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GRID_LAYOUT = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.checkbox2;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;gradientColor=#DEDEDE;fillColor=#EDEDED;checked=0;spacing=5;strokeColor=#999999;fontColor=#212529;checkedFill=#0085FC;checkedStroke=#ffffff;',
  },
  _width: 14,
  _height: 360,
}

export function GridLayout(props: NodeProps) {
  return (
    <Shape
      {...GRID_LAYOUT}
      {...props}
      _style={extendStyle(GRID_LAYOUT, props)}
    />
  )
}
