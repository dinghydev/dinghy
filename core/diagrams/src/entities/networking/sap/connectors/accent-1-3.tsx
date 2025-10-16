import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACCENT_1_3 = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeColor=#07838F;bendable=1;rounded=0;endFill=0;endSize=4;strokeWidth=1.5;startSize=4;startArrow=none;startFill=0;',
  },
  _width: 120,
  _height: 0,
}

export function Accent13(props: DiagramNodeProps) {
  return (
    <Shape {...ACCENT_1_3} {...props} _style={extendStyle(ACCENT_1_3, props)} />
  )
}
