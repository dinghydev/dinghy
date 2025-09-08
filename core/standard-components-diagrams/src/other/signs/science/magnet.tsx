import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MAGNET = {
  _style: {
    entity:
      'shape=mxgraph.signs.science.magnet;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 74,
  _original_height: 99,
}

export function Magnet(props: DiagramNodeProps) {
  return <Shape {...MAGNET} {...props} _style={extendStyle(MAGNET, props)} />
}
