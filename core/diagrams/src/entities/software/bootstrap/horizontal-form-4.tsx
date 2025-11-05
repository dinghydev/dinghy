import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HORIZONTAL_FORM_4 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.checkbox2;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;gradientColor=#DEDEDE;fillColor=#EDEDED;strokeColor=#666666;checked=1;spacing=5;fontColor=#212529;checkedFill=#0085FC;checkedStroke=#ffffff;sketch=0;',
  },
  _width: 9,
  _height: 200,
}

export function HorizontalForm4(props: NodeProps) {
  return (
    <Shape
      {...HORIZONTAL_FORM_4}
      {...props}
      _style={extendStyle(HORIZONTAL_FORM_4, props)}
    />
  )
}
