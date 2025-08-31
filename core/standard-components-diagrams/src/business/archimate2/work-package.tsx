import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORK_PACKAGE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffe0e0;shape=mxgraph.archimate.rounded=1',
  },
  _width: 100,
  _height: 75,
}

export function WorkPackage(props: DiagramNodeProps) {
  return (
    <Shape
      {...WORK_PACKAGE}
      {...props}
      _style={extendStyle(WORK_PACKAGE, props)}
    />
  )
}
