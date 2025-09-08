import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SWITCH_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.switch;strokeColor=#ADB6BD;strokeWidth=1;fillColor=#E9ECEF;fontColor=#7D868C;onStrokeColor=#ffffff;onFillColor=#0085FC;align=left;verticalAlign=middle;spacingLeft=10;labelPosition=right;verticalLabelPosition=middle;buttonState=0;sketch=0;',
  },
  _original_width: 20,
  _original_height: 10,
}

export function Switch2(props: DiagramNodeProps) {
  return (
    <Shape {...SWITCH_2} {...props} _style={extendStyle(SWITCH_2, props)} />
  )
}
