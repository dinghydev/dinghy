import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIRECT_ONE_DIRECTIONAL = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;strokeColor=#475e75;bendable=1;rounded=0;endFill=1;endSize=4;strokeWidth=1.5;startSize=4;startArrow=none;startFill=0;',
  },
  _width: 120,
  _height: 0,
}

export function DirectOneDirectional(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIRECT_ONE_DIRECTIONAL}
      {...props}
      _style={extendStyle(DIRECT_ONE_DIRECTIONAL, props)}
    />
  )
}
