import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LAPTOP = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.laptop;network2IconW=1;network2IconH=0.5734;',
  },
  _original_width: 50,
  _original_height: 28.67,
}

export function Laptop(props: DiagramNodeProps) {
  return <Shape {...LAPTOP} {...props} _style={extendStyle(LAPTOP, props)} />
}
