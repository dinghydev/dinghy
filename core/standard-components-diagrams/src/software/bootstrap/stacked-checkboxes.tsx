import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STACKED_CHECKBOXES = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.checkbox2;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;gradientColor=#DEDEDE;fillColor=#EDEDED;checked=1;spacing=5;checkedFill=#0085FC;checkedStroke=#ffffff;sketch=0;',
  },
  _original_width: 0,
  _original_height: 30,
}

export function StackedCheckboxes(props: DiagramNodeProps) {
  return (
    <Shape
      {...STACKED_CHECKBOXES}
      {...props}
      _style={extendStyle(STACKED_CHECKBOXES, props)}
    />
  )
}
