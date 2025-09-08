import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WORK_PACKAGE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#FFE0E0;shape=mxgraph.archimate3.application;appType=workPackage;archiType=rounded;',
  },
  _original_width: 150,
  _original_height: 75,
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
