import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WIRELESS_HUB = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.wireless_hub;',
  },
  _original_width: 100,
  _original_height: 85,
}

export function WirelessHub(props: DiagramNodeProps) {
  return (
    <Shape
      {...WIRELESS_HUB}
      {...props}
      _style={extendStyle(WIRELESS_HUB, props)}
    />
  )
}
