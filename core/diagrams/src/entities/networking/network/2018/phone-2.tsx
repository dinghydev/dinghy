import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PHONE_2 = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.phone_2;',
  },
  _original_width: 100,
  _original_height: 90,
}

export function Phone2(props: NodeProps) {
  return <Shape {...PHONE_2} {...props} _style={extendStyle(PHONE_2, props)} />
}
