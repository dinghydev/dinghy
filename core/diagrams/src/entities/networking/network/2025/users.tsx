import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USERS = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.users;network2IconXOffset=0.0019;network2IconYOffset=-0.0004;network2IconW=1.0353;network2IconH=0.6623;',
  },
  _width: 51.76500000000001,
  _height: 33.115,
}

export function Users(props: NodeProps) {
  return <Shape {...USERS} {...props} _style={extendStyle(USERS, props)} />
}
