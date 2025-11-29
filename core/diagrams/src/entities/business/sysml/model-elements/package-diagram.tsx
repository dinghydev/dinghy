import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PACKAGE_DIAGRAM = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.package;xSize=90;align=left;spacingLeft=10;overflow=fill;recursiveResize=0;',
  },
  _width: 0,
  _height: 120,
}

export function PackageDiagram(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PACKAGE_DIAGRAM)} />
}
