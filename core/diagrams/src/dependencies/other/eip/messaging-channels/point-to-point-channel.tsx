import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POINT_TO_POINT_CHANNEL = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;strokeColor=#808080;endArrow=block;endSize=10;dashed=0;verticalAlign=bottom;strokeWidth=2;',
  },
}

export function PointToPointChannel(props: NodeProps) {
  return (
    <Dependency
      {...props}
      _style={extendStyle(props, POINT_TO_POINT_CHANNEL)}
    />
  )
}
