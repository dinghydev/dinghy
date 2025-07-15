import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OPTIONS = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.options;pointerEvents=1',
  _width: 30,
  _height: 15,
}

export function Options(props: DiagramNodeProps) {
  return <Shape {...OPTIONS} {...props} />
}
