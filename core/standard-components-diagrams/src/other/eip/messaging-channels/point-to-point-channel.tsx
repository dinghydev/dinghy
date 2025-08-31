import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POINT_TO_POINT_CHANNEL = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;strokeColor=#808080;endArrow=block;endSize=10;dashed=0;verticalAlign=bottom;strokeWidth=2;',
  },
}

export function PointToPointChannel(props: DiagramNodeProps) {
  return (
    <Dependency
      {...POINT_TO_POINT_CHANNEL}
      {...props}
      _style={extendStyle(POINT_TO_POINT_CHANNEL, props)}
    />
  )
}
