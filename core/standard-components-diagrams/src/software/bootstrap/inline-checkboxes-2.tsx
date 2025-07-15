import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INLINE_CHECKBOXES_2 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.checkbox2;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;gradientColor=#DEDEDE;fillColor=#EDEDED;checked=0;strokeColor=#D0D0D0;spacing=5;fontColor=#6C767D;checkedFill=#0085FC;checkedStroke=#ffffff;',
  _width: 2,
  _height: 10,
}

export function InlineCheckboxes2(props: DiagramNodeProps) {
  return <Shape {...INLINE_CHECKBOXES_2} {...props} />
}
