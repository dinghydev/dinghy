import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIREWALL = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.firewall;',
  },
  _width: 60,
  _height: 60,
}

export function Firewall(props: DiagramNodeProps) {
  return (
    <Shape {...FIREWALL} {...props} _style={extendStyle(FIREWALL, props)} />
  )
}
