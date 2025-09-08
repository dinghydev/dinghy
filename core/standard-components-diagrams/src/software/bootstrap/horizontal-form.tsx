import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HORIZONTAL_FORM = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.radioButton2;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;gradientColor=#DEDEDE;fillColor=#EDEDED;strokeColor=#666666;checked=1;spacing=5;fontColor=#212529;checkedFill=#0085FC;checkedStroke=#ffffff;sketch=0;',
  },
  _original_width: 5,
  _original_height: 200,
}

export function HorizontalForm(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_FORM}
      {...props}
      _style={extendStyle(HORIZONTAL_FORM, props)}
    />
  )
}
