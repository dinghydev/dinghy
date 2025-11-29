import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IN_BLOCK_DEFINITION_DIAGRAMS_ACTIVITY_ASSOCIATION = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.package;labelX=45;align=left;spacingLeft=5;verticalAlign=top;spacingTop=-3;fontStyle=1;strokeWidth=1;recursiveResize=0;',
  },
  _width: 0,
  _height: 250,
}

export function InBlockDefinitionDiagramsActivityAssociation(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(
        props,
        IN_BLOCK_DEFINITION_DIAGRAMS_ACTIVITY_ASSOCIATION,
      )}
    />
  )
}
