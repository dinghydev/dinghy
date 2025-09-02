import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HTTPS_PROTOCOL = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=#475E75;fillColor=#F5F6F7;strokeWidth=1.5;fontColor=#475E75;fontStyle=1;fontSize=10;',
  },
  _original_width: 214,
  _original_height: 50,
}

export function HttpsProtocol(props: DiagramNodeProps) {
  return (
    <Shape
      {...HTTPS_PROTOCOL}
      {...props}
      _style={extendStyle(HTTPS_PROTOCOL, props)}
    />
  )
}
