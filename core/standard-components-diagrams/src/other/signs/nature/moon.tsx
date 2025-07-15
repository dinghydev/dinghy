import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MOON = {
  _style:
    'shape=mxgraph.signs.nature.moon;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 76,
  _height: 99,
}

export function Moon(props: DiagramNodeProps) {
  return <Shape {...MOON} {...props} />
}
