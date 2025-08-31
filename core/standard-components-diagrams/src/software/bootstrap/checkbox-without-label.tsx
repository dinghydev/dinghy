import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHECKBOX_WITHOUT_LABEL = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.checkbox2;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;gradientColor=#DEDEDE;fillColor=#EDEDED;checked=0;spacing=5;checkedFill=#0085FC;checkedStroke=#ffffff;sketch=0;',
  },
  _width: 10,
  _height: 10,
}

export function CheckboxWithoutLabel(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHECKBOX_WITHOUT_LABEL}
      {...props}
      _style={extendStyle(CHECKBOX_WITHOUT_LABEL, props)}
    />
  )
}
