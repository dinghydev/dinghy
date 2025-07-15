import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SWITCH = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.switch;strokeColor=#ADB6BD;strokeWidth=1;fillColor=#ffffff;fontColor=#212529;onStrokeColor=#ffffff;onFillColor=#0085FC;align=left;verticalAlign=middle;spacingLeft=10;labelPosition=right;verticalLabelPosition=middle;buttonState=0;sketch=0;',
  _width: 20,
  _height: 10,
}

export function Switch(props: DiagramNodeProps) {
  return <Shape {...SWITCH} {...props} />
}
