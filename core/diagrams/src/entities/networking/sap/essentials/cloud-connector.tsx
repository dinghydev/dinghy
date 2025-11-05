import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_CONNECTOR = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;strokeColor=#0070F2;strokeWidth=1.5;arcSize=16;fillColor=#FFFFFF;perimeterSpacing=0;absoluteArcSize=1;',
  },
  _width: 0,
  _height: 160,
}

export function CloudConnector(props: NodeProps) {
  return (
    <Shape
      {...CLOUD_CONNECTOR}
      {...props}
      _style={extendStyle(CLOUD_CONNECTOR, props)}
    />
  )
}
