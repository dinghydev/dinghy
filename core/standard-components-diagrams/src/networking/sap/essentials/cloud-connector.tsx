import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_CONNECTOR = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;strokeColor=#0070F2;strokeWidth=1.5;arcSize=16;fillColor=#FFFFFF;perimeterSpacing=0;absoluteArcSize=1;',
  },
  _original_width: 0,
  _original_height: 160,
}

export function CloudConnector(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_CONNECTOR}
      {...props}
      _style={extendStyle(CLOUD_CONNECTOR, props)}
    />
  )
}
