import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUSINESS_CENTER = {
  _style:
    'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.business_center;',
  _width: 90,
  _height: 100,
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
