import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUS_2 = {
  _style: {
    entity:
      'strokeColor=#6881B3;edgeStyle=none;rounded=0;endArrow=none;html=1;strokeWidth=2;',
  },
  _original_width: 1,
  _original_height: 140,
}

export function Bus2(props: DiagramNodeProps) {
  return <Shape {...BUS_2} {...props} _style={extendStyle(BUS_2, props)} />
}
