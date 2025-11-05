import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CAMPER_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.camper_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 79,
}

export function Camper1(props: NodeProps) {
  return (
    <Shape {...CAMPER_1} {...props} _style={extendStyle(CAMPER_1, props)} />
  )
}
