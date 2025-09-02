import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JUPITER = {
  _style: {
    entity:
      'shape=mxgraph.signs.nature.jupiter;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 83,
  _original_height: 99,
}

export function Jupiter(props: DiagramNodeProps) {
  return <Shape {...JUPITER} {...props} _style={extendStyle(JUPITER, props)} />
}
