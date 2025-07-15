import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HTTPS_PROTOCOL = {
  _style:
    'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=#475E75;fillColor=#F5F6F7;strokeWidth=1.5;fontColor=#475E75;fontStyle=1;fontSize=10;',
  _width: 214,
  _height: 50,
}

export function HttpsProtocol(props: DiagramNodeProps) {
  return <Shape {...HTTPS_PROTOCOL} {...props} />
}
