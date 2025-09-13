import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CYLINDER = {
  _style: {
    entity:
      'shape=cylinder3;whiteSpace=wrap;html=1;boundedLbl=1;backgroundOutline=1;size=15;',
  },
  _width: 60,
  _height: 80,
}

export function Cylinder(props: DiagramNodeProps) {
  return (
    <Shape {...CYLINDER} {...props} _style={extendStyle(CYLINDER, props)} />
  )
}
