import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DRINKING_FOUNTAIN = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.drinking_fountain;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 82,
  _height: 101,
}

export function DrinkingFountain(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DRINKING_FOUNTAIN)} />
}
