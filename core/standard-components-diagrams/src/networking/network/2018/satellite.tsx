import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SATELLITE = {
  _style:
    'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.satellite;',
  _width: 60,
  _height: 60,
}

export function Satellite(props: DiagramNodeProps) {
  return (
    <Shape {...SATELLITE} {...props} _style={extendStyle(SATELLITE, props)} />
  )
}
