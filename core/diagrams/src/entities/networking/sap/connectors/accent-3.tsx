import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACCENT_3 = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;strokeColor=#CB00DC;bendable=1;rounded=0;endFill=1;endSize=4;strokeWidth=1.5;startSize=4;startArrow=none;startFill=0;',
  },
  _width: 120,
  _height: 0,
}

export function Accent3(props: NodeProps) {
  return (
    <Shape {...ACCENT_3} {...props} _style={extendStyle(ACCENT_3, props)} />
  )
}
