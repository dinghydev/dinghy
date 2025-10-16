import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ONE_CLIENT = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.one_client;',
  },
  _width: 90.8,
  _height: 61.6,
}

export function OneClient(props: DiagramNodeProps) {
  return (
    <Shape {...ONE_CLIENT} {...props} _style={extendStyle(ONE_CLIENT, props)} />
  )
}
