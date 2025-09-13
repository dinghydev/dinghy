import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTERNAL_ACTIVE_STRUCTURE_ELEMENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=generic;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function InternalActiveStructureElement(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERNAL_ACTIVE_STRUCTURE_ELEMENT}
      {...props}
      _style={extendStyle(INTERNAL_ACTIVE_STRUCTURE_ELEMENT, props)}
    />
  )
}
