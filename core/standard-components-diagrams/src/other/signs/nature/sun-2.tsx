import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUN_2 = {
  _style:
    'shape=mxgraph.signs.nature.sun_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 99,
}

export function Sun2(props: DiagramNodeProps) {
  return <Shape {...SUN_2} {...props} />
}
