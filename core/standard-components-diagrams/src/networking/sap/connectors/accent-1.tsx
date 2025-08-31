import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACCENT_1 = {
  _style:
    'endArrow=blockThin;html=1;strokeColor=#07838F;bendable=1;rounded=0;endFill=1;endSize=4;strokeWidth=1.5;startSize=4;startArrow=none;startFill=0;',
  _width: 120,
  _height: 0,
}

export function Accent1(props: DiagramNodeProps) {
  return (
    <Shape {...ACCENT_1} {...props} _style={extendStyle(ACCENT_1, props)} />
  )
}
