import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const UPS_SMALL = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.ups_small;',
  },
  _width: 70,
  _height: 100,
}

export function UpsSmall(props: DiagramNodeProps) {
  return (
    <Shape {...UPS_SMALL} {...props} _style={extendStyle(UPS_SMALL, props)} />
  )
}
