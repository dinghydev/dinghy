import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UNLOCKED = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.unlocked;',
  _width: 24,
  _height: 30,
}

export function Unlocked(props: DiagramNodeProps) {
  return (
    <Shape {...UNLOCKED} {...props} _style={extendStyle(UNLOCKED, props)} />
  )
}
