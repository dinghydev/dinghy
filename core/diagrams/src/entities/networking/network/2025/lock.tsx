import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOCK = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.lock;network2IconW=0.8;network2IconH=0.9999;',
  },
  _original_width: 40,
  _original_height: 49.995,
}

export function Lock(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOCK)} />
}
