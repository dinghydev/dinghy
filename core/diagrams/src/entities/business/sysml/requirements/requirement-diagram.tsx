import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REQUIREMENT_DIAGRAM = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.package;overflow=fill;labelX=110;strokeWidth=2;align=center;',
  },
  _width: 160,
  _height: 80,
}

export function RequirementDiagram(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, REQUIREMENT_DIAGRAM)} />
}
