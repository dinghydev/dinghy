import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MARS = {
  _style: {
    entity:
      'shape=mxgraph.signs.nature.mars;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function Mars(props: DiagramNodeProps) {
  return <Shape {...MARS} {...props} _style={extendStyle(MARS, props)} />
}
