import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUN_4 = {
  _style:
    'shape=mxgraph.signs.nature.sun_4;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 98,
}

export function Sun4(props: DiagramNodeProps) {
  return <Shape {...SUN_4} {...props} />
}
