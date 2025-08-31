import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CYLINDER = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.cylinder;fillColor=#10739E;strokeColor=none;',
  _width: 60,
  _height: 100,
}

export function Cylinder(props: DiagramNodeProps) {
  return (
    <Shape {...CYLINDER} {...props} _style={extendStyle(CYLINDER, props)} />
  )
}
