import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUSINESS_CENTER = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.business_center;',
  },
  _original_width: 90,
  _original_height: 100,
}

export function BusinessCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUSINESS_CENTER}
      {...props}
      _style={extendStyle(BUSINESS_CENTER, props)}
    />
  )
}
