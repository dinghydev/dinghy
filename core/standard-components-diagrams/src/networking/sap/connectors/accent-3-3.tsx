import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACCENT_3_3 = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeColor=#CB00DC;bendable=1;rounded=0;endFill=0;endSize=4;strokeWidth=1.5;startSize=4;startArrow=none;startFill=0;',
  },
  _width: 120,
  _height: 0,
}

export function Accent33(props: DiagramNodeProps) {
  return (
    <Shape {...ACCENT_3_3} {...props} _style={extendStyle(ACCENT_3_3, props)} />
  )
}
