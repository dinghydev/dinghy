import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUN_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.nature.sun_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 60,
  _height: 60,
}

export function Sun2(props: DiagramNodeProps) {
  return <Shape {...SUN_2} {...props} _style={extendStyle(SUN_2, props)} />
}
