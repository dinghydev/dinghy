import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WORK_PACKAGE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffe0e0;shape=mxgraph.archimate.rounded=1',
  },
  _width: 100,
  _height: 75,
}

export function WorkPackage(props: NodeProps) {
  return (
    <Shape
      {...WORK_PACKAGE}
      {...props}
      _style={extendStyle(WORK_PACKAGE, props)}
    />
  )
}
