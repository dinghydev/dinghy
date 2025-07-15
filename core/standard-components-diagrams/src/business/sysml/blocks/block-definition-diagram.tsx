import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BLOCK_DEFINITION_DIAGRAM = {
  _style:
    'html=1;shape=mxgraph.sysml.package;labelX=120;align=left;spacingLeft=10;overflow=fill;recursiveResize=0;',
  _width: 0,
  _height: 100,
}

export function BlockDefinitionDiagram(props: DiagramNodeProps) {
  return <Shape {...BLOCK_DEFINITION_DIAGRAM} {...props} />
}
