import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PIANO = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.piano;',
  },
  _original_width: 135,
  _original_height: 143,
}

export function Piano(props: DiagramNodeProps) {
  return <Shape {...PIANO} {...props} _style={extendStyle(PIANO, props)} />
}
