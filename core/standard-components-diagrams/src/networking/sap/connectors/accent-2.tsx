import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACCENT_2 = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;strokeColor=#5D36FF;bendable=1;rounded=0;endFill=1;endSize=4;strokeWidth=1.5;startSize=4;startArrow=none;startFill=0;',
  },
  _original_width: 120,
  _original_height: 0,
}

export function Accent2(props: DiagramNodeProps) {
  return (
    <Shape {...ACCENT_2} {...props} _style={extendStyle(ACCENT_2, props)} />
  )
}
