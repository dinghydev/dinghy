import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECURED = {
  _style:
    'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.secured;',
  _width: 80,
  _height: 100,
}

export function Secured(props: DiagramNodeProps) {
  return <Shape {...SECURED} {...props} />
}
