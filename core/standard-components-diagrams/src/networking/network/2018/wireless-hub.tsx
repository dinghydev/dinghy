import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WIRELESS_HUB = {
  _style:
    'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.wireless_hub;',
  _width: 100,
  _height: 85,
}

export function WirelessHub(props: DiagramNodeProps) {
  return <Shape {...WIRELESS_HUB} {...props} />
}
