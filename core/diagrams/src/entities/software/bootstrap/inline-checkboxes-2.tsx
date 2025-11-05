import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INLINE_CHECKBOXES_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.checkbox2;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;gradientColor=#DEDEDE;fillColor=#EDEDED;checked=0;strokeColor=#D0D0D0;spacing=5;fontColor=#6C767D;checkedFill=#0085FC;checkedStroke=#ffffff;',
  },
  _width: 2,
  _height: 10,
}

export function InlineCheckboxes2(props: NodeProps) {
  return (
    <Shape
      {...INLINE_CHECKBOXES_2}
      {...props}
      _style={extendStyle(INLINE_CHECKBOXES_2, props)}
    />
  )
}
