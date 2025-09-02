import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLAQUE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.plaque;dx=6;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function Plaque(props: DiagramNodeProps) {
  return <Shape {...PLAQUE} {...props} _style={extendStyle(PLAQUE, props)} />
}
