import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COUCH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.couch;',
  },
  _width: 150,
  _height: 80,
}

export function Couch(props: DiagramNodeProps) {
  return <Shape {...COUCH} {...props} _style={extendStyle(COUCH, props)} />
}
