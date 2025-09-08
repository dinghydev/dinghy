import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const UNSECURE = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.unsecure;',
  },
  _original_width: 80,
  _original_height: 100,
}

export function Unsecure(props: DiagramNodeProps) {
  return (
    <Shape {...UNSECURE} {...props} _style={extendStyle(UNSECURE, props)} />
  )
}
