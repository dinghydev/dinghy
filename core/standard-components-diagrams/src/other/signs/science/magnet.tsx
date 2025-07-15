import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MAGNET = {
  _style:
    'shape=mxgraph.signs.science.magnet;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 74,
  _height: 99,
}

export function Magnet(props: DiagramNodeProps) {
  return <Shape {...MAGNET} {...props} />
}
