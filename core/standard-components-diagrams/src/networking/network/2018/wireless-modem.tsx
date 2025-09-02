import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WIRELESS_MODEM = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.wireless_modem;',
  },
  _original_width: 100,
  _original_height: 85,
}

export function WirelessModem(props: DiagramNodeProps) {
  return (
    <Shape
      {...WIRELESS_MODEM}
      {...props}
      _style={extendStyle(WIRELESS_MODEM, props)}
    />
  )
}
