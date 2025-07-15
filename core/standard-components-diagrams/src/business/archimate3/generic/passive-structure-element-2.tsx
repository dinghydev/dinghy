import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PASSIVE_STRUCTURE_ELEMENT_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.passive;',
  _width: 60,
  _height: 35,
}

export function PassiveStructureElement2(props: DiagramNodeProps) {
  return <Shape {...PASSIVE_STRUCTURE_ELEMENT_2} {...props} />
}
