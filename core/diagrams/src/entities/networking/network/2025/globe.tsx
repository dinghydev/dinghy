import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GLOBE = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.globe;network2IconW=1;network2IconH=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Globe(props: NodeProps) {
  return <Shape {...GLOBE} {...props} _style={extendStyle(GLOBE, props)} />
}
