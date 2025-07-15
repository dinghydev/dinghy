import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PASSIVE_STRUCTURE_ELEMENT = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=passive;archiType=square',
  _width: 150,
  _height: 75,
}

export function PassiveStructureElement(props: DiagramNodeProps) {
  return <Shape {...PASSIVE_STRUCTURE_ELEMENT} {...props} />
}
