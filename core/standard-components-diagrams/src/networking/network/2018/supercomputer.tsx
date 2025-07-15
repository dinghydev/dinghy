import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUPERCOMPUTER = {
  _style:
    'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.supercomputer;',
  _width: 100,
  _height: 100,
}

export function Supercomputer(props: DiagramNodeProps) {
  return <Shape {...SUPERCOMPUTER} {...props} />
}
