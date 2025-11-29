import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HTTPS_PROTOCOL = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=#475E75;fillColor=#F5F6F7;strokeWidth=1.5;fontColor=#475E75;fontStyle=1;fontSize=10;',
  },
  _width: 214,
  _height: 50,
}

export function HttpsProtocol(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HTTPS_PROTOCOL)} />
}
