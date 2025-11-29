import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLET = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.tablet;network2IconW=1;network2IconH=0.6566;',
  },
  _width: 50,
  _height: 32.83,
}

export function Tablet(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABLET)} />
}
