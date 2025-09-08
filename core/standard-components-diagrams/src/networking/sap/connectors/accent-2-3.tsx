import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACCENT_2_3 = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeColor=#5D36FF;bendable=1;rounded=0;endFill=0;endSize=4;strokeWidth=1.5;startSize=4;startArrow=none;startFill=0;',
  },
  _original_width: 120,
  _original_height: 0,
}

export function Accent23(props: DiagramNodeProps) {
  return (
    <Shape {...ACCENT_2_3} {...props} _style={extendStyle(ACCENT_2_3, props)} />
  )
}
