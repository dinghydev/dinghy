import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BTP_BASE_LAYER = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;strokeColor=#0070F2;fillColor=#EBF8FF;arcSize=32;absoluteArcSize=1;strokeWidth=1.5;',
  },
  _width: 0,
  _height: 250,
}

export function BtpBaseLayer(props: NodeProps) {
  return (
    <Shape
      {...BTP_BASE_LAYER}
      {...props}
      _style={extendStyle(BTP_BASE_LAYER, props)}
    />
  )
}
