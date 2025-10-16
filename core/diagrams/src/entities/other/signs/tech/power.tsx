import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POWER = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.power;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 91,
  _original_height: 98,
}

export function Power(props: DiagramNodeProps) {
  return <Shape {...POWER} {...props} _style={extendStyle(POWER, props)} />
}
