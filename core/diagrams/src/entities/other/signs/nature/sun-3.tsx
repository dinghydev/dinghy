import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SUN_3 = {
  _style: {
    entity:
      'shape=mxgraph.signs.nature.sun_3;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function Sun3(props: DiagramNodeProps) {
  return <Shape {...SUN_3} {...props} _style={extendStyle(SUN_3, props)} />
}
