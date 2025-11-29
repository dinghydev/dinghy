import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAGNET = {
  _style: {
    entity:
      'shape=mxgraph.signs.science.magnet;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 74,
  _height: 99,
}

export function Magnet(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MAGNET)} />
}
