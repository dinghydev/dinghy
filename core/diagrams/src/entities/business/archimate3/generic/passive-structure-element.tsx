import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PASSIVE_STRUCTURE_ELEMENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=passive;archiType=square',
  },
  _width: 150,
  _height: 75,
}

export function PassiveStructureElement(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, PASSIVE_STRUCTURE_ELEMENT)} />
  )
}
