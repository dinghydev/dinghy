import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GRID_LAYOUT = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.checkbox2;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;gradientColor=#DEDEDE;fillColor=#EDEDED;checked=0;spacing=5;strokeColor=#999999;fontColor=#212529;checkedFill=#0085FC;checkedStroke=#ffffff;',
  _width: 14,
  _height: 360,
}

export function GridLayout(props: DiagramNodeProps) {
  return <Shape {...GRID_LAYOUT} {...props} />
}
