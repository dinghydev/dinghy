import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REQUIREMENT_DIAGRAM = {
  _style:
    'html=1;shape=mxgraph.sysml.package;overflow=fill;labelX=110;strokeWidth=2;align=center;',
  _width: 160,
  _height: 80,
}

export function RequirementDiagram(props: DiagramNodeProps) {
  return <Shape {...REQUIREMENT_DIAGRAM} {...props} />
}
