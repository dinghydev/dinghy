import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CYLINDER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.cylinder;fillColor=#10739E;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 100,
}

export function Cylinder(props: DiagramNodeProps) {
  return (
    <Shape {...CYLINDER} {...props} _style={extendStyle(CYLINDER, props)} />
  )
}
