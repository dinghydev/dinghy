import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CUBE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#10739E;strokeColor=none;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Cube(props: DiagramNodeProps) {
  return <Shape {...CUBE} {...props} _style={extendStyle(CUBE, props)} />
}
