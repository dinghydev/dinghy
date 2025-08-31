import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMM_LINK_ICON = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.comm_link;',
  },
  _width: 30,
  _height: 100,
}

export function CommLinkIcon(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMM_LINK_ICON}
      {...props}
      _style={extendStyle(COMM_LINK_ICON, props)}
    />
  )
}
