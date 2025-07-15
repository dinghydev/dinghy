import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INLINE_FORM_3 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.checkbox2;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;gradientColor=#DEDEDE;fillColor=#EDEDED;strokeColor=#A6A6A6;checked=0;spacing=5;checkedFill=#0085FC;checkedStroke=#ffffff;',
  _width: 2,
  _height: 30,
}

export function InlineForm3(props: DiagramNodeProps) {
  return <Shape {...INLINE_FORM_3} {...props} />
}
