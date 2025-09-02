import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUN_4 = {
  _style: {
    entity:
      'shape=mxgraph.signs.nature.sun_4;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function Sun4(props: DiagramNodeProps) {
  return <Shape {...SUN_4} {...props} _style={extendStyle(SUN_4, props)} />
}
