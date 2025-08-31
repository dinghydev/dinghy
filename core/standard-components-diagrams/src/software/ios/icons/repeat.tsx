import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REPEAT = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.repeat;pointerEvents=1',
  _width: 30,
  _height: 24,
}

export function Repeat(props: DiagramNodeProps) {
  return <Shape {...REPEAT} {...props} _style={extendStyle(REPEAT, props)} />
}
