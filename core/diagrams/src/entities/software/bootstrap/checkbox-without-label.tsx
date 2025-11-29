import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHECKBOX_WITHOUT_LABEL = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.checkbox2;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;gradientColor=#DEDEDE;fillColor=#EDEDED;checked=0;spacing=5;checkedFill=#0085FC;checkedStroke=#ffffff;sketch=0;',
  },
  _original_width: 10,
  _original_height: 10,
}

export function CheckboxWithoutLabel(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CHECKBOX_WITHOUT_LABEL)} />
  )
}
