import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PASSIVE_STRUCTURE_ELEMENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=passive;archiType=square',
  },
  _original_width: 150,
  _original_height: 75,
}

export function PassiveStructureElement(props: DiagramNodeProps) {
  return (
    <Shape
      {...PASSIVE_STRUCTURE_ELEMENT}
      {...props}
      _style={extendStyle(PASSIVE_STRUCTURE_ELEMENT, props)}
    />
  )
}
