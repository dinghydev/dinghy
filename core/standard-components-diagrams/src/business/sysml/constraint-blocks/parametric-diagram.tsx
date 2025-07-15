import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARAMETRIC_DIAGRAM = {
  _style:
    'html=1;shape=mxgraph.sysml.package;labelX=120;align=left;spacingLeft=10;overflow=fill;whiteSpace=wrap;recursiveResize=0;',
  _width: 0,
  _height: 170,
}

export function ParametricDiagram(props: DiagramNodeProps) {
  return <Shape {...PARAMETRIC_DIAGRAM} {...props} />
}
