import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WARNING = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;strokeColor=#c35500;bendable=1;rounded=0;endFill=1;endSize=4;strokeWidth=1.5;startSize=4;startArrow=none;startFill=0;',
  },
  _width: 120,
  _height: 0,
}

export function Warning(props: NodeProps) {
  return <Shape {...WARNING} {...props} _style={extendStyle(WARNING, props)} />
}
