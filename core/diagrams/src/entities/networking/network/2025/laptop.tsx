import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LAPTOP = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.laptop;network2IconW=1;network2IconH=0.5734;',
  },
  _width: 50,
  _height: 28.67,
}

export function Laptop(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LAPTOP)} />
}
