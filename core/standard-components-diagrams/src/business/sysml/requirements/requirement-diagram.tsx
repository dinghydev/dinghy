import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REQUIREMENT_DIAGRAM = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.package;overflow=fill;labelX=110;strokeWidth=2;align=center;',
  },
  _original_width: 160,
  _original_height: 80,
}

export function RequirementDiagram(props: DiagramNodeProps) {
  return (
    <Shape
      {...REQUIREMENT_DIAGRAM}
      {...props}
      _style={extendStyle(REQUIREMENT_DIAGRAM, props)}
    />
  )
}
