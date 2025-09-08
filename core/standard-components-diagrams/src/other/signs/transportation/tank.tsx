import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TANK = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.tank;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 100,
  _original_height: 50,
}

export function Tank(props: DiagramNodeProps) {
  return <Shape {...TANK} {...props} _style={extendStyle(TANK, props)} />
}
