import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CROSS_DOCK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.crossDock;',
  },
  _original_width: 100,
  _original_height: 80,
}

export function CrossDock(props: DiagramNodeProps) {
  return (
    <Shape {...CROSS_DOCK} {...props} _style={extendStyle(CROSS_DOCK, props)} />
  )
}
