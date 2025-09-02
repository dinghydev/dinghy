import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HORIZONTAL_FORM_3 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.radioButton2;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;gradientColor=#DEDEDE;fillColor=#EDEDED;strokeColor=#D2D2D2;checked=0;spacing=5;fontColor=#7D868C;checkedFill=#0085FC;checkedStroke=#ffffff;sketch=0;',
  },
  _original_width: 7,
  _original_height: 200,
}

export function HorizontalForm3(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_FORM_3}
      {...props}
      _style={extendStyle(HORIZONTAL_FORM_3, props)}
    />
  )
}
