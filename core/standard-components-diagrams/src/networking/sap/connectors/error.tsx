import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ERROR = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;strokeColor=#d20a0a;bendable=1;rounded=0;endFill=1;endSize=4;strokeWidth=1.5;startSize=4;startArrow=none;startFill=0;',
  },
  _width: 120,
  _height: 0,
}

export function Error(props: DiagramNodeProps) {
  return <Shape {...ERROR} {...props} _style={extendStyle(ERROR, props)} />
}
