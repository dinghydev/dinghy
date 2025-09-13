import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SUCCESS = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;strokeColor=#188918;bendable=1;rounded=0;endFill=1;endSize=4;strokeWidth=1.5;startSize=4;startArrow=none;startFill=0;',
  },
  _width: 120,
  _height: 0,
}

export function Success(props: DiagramNodeProps) {
  return <Shape {...SUCCESS} {...props} _style={extendStyle(SUCCESS, props)} />
}
