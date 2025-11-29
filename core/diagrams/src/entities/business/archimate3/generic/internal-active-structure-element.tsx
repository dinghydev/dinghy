import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERNAL_ACTIVE_STRUCTURE_ELEMENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=generic;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function InternalActiveStructureElement(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, INTERNAL_ACTIVE_STRUCTURE_ELEMENT)}
    />
  )
}
