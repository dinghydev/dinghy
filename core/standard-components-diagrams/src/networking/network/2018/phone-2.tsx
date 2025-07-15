import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PHONE_2 = {
  _style:
    'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.phone_2;',
  _width: 100,
  _height: 90,
}

export function Phone2(props: DiagramNodeProps) {
  return <Shape {...PHONE_2} {...props} />
}
