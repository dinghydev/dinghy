import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INLINE_CHECKBOXES = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.checkbox2;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;gradientColor=#DEDEDE;fillColor=#EDEDED;checked=0;spacing=5;checkedFill=#0085FC;checkedStroke=#ffffff;',
  },
  _width: 0,
  _height: 10,
}

export function InlineCheckboxes(props: DiagramNodeProps) {
  return (
    <Shape
      {...INLINE_CHECKBOXES}
      {...props}
      _style={extendStyle(INLINE_CHECKBOXES, props)}
    />
  )
}
