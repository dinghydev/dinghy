import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUN_1 = {
  _style:
    'shape=mxgraph.signs.nature.sun_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 60,
  _height: 60,
}

export function Sun1(props: DiagramNodeProps) {
  return <Shape {...SUN_1} {...props} _style={extendStyle(SUN_1, props)} />
}
