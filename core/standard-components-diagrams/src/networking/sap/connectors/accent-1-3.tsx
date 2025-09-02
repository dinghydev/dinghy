import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACCENT_1_3 = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeColor=#07838F;bendable=1;rounded=0;endFill=0;endSize=4;strokeWidth=1.5;startSize=4;startArrow=none;startFill=0;',
  },
  _original_width: 120,
  _original_height: 0,
}

export function Accent13(props: DiagramNodeProps) {
  return (
    <Shape {...ACCENT_1_3} {...props} _style={extendStyle(ACCENT_1_3, props)} />
  )
}
