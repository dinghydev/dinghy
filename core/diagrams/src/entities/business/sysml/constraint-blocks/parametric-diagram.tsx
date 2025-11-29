import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARAMETRIC_DIAGRAM = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.package;labelX=120;align=left;spacingLeft=10;overflow=fill;whiteSpace=wrap;recursiveResize=0;',
  },
  _width: 0,
  _height: 170,
}

export function ParametricDiagram(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PARAMETRIC_DIAGRAM)} />
}
