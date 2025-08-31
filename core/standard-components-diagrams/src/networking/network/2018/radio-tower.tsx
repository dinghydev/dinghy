import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RADIO_TOWER = {
  _style:
    'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.radio_tower;',
  _width: 55,
  _height: 100,
}

export function RadioTower(props: DiagramNodeProps) {
  return (
    <Shape
      {...RADIO_TOWER}
      {...props}
      _style={extendStyle(RADIO_TOWER, props)}
    />
  )
}
