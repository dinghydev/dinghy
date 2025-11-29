import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STACKED_CHECKBOXES_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.checkbox2;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;gradientColor=#DEDEDE;fillColor=#EDEDED;checked=0;spacing=5;fontColor=#6C767D;checkedFill=#0085FC;checkedStroke=#ffffff;sketch=0;',
  },
  _width: 1,
  _height: 30,
}

export function StackedCheckboxes2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STACKED_CHECKBOXES_2)} />
}
