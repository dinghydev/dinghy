import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ONE_CLIENT = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.one_client;',
  },
  _original_width: 90.8,
  _original_height: 61.6,
}

export function OneClient(props: DiagramNodeProps) {
  return (
    <Shape {...ONE_CLIENT} {...props} _style={extendStyle(ONE_CLIENT, props)} />
  )
}
