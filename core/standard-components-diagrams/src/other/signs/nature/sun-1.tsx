import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUN_1 = {
  _style:
    'shape=mxgraph.signs.nature.sun_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 99,
}

export function Sun1(props: DiagramNodeProps) {
  return <Shape {...SUN_1} {...props} />
}
