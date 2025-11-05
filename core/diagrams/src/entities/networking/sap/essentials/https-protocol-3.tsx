import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HTTPS_PROTOCOL_3 = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;strokeColor=#475E75;bendable=1;rounded=0;endFill=1;endSize=4;strokeWidth=1.5;startSize=4;startArrow=none;startFill=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;',
  },
  _width: 2,
  _height: 50,
}

export function HttpsProtocol3(props: NodeProps) {
  return (
    <Shape
      {...HTTPS_PROTOCOL_3}
      {...props}
      _style={extendStyle(HTTPS_PROTOCOL_3, props)}
    />
  )
}
