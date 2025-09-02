import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PACKAGE_DIAGRAM = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.package;xSize=90;align=left;spacingLeft=10;overflow=fill;recursiveResize=0;',
  },
  _original_width: 0,
  _original_height: 120,
}

export function PackageDiagram(props: DiagramNodeProps) {
  return (
    <Shape
      {...PACKAGE_DIAGRAM}
      {...props}
      _style={extendStyle(PACKAGE_DIAGRAM, props)}
    />
  )
}
