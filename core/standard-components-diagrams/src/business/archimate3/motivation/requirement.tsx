import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REQUIREMENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.application;appType=requirement;archiType=oct;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function Requirement(props: DiagramNodeProps) {
  return (
    <Shape
      {...REQUIREMENT}
      {...props}
      _style={extendStyle(REQUIREMENT, props)}
    />
  )
}
