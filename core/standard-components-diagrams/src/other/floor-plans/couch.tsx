import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COUCH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.couch;',
  },
  _original_width: 150,
  _original_height: 80,
}

export function Couch(props: DiagramNodeProps) {
  return <Shape {...COUCH} {...props} _style={extendStyle(COUCH, props)} />
}
