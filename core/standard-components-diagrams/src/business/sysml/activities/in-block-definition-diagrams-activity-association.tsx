import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IN_BLOCK_DEFINITION_DIAGRAMS_ACTIVITY_ASSOCIATION = {
  _style:
    'html=1;shape=mxgraph.sysml.package;labelX=45;align=left;spacingLeft=5;verticalAlign=top;spacingTop=-3;fontStyle=1;strokeWidth=1;recursiveResize=0;',
  _width: 0,
  _height: 250,
}

export function InBlockDefinitionDiagramsActivityAssociation(
  props: DiagramNodeProps,
) {
  return (
    <Shape {...IN_BLOCK_DEFINITION_DIAGRAMS_ACTIVITY_ASSOCIATION} {...props} />
  )
}
