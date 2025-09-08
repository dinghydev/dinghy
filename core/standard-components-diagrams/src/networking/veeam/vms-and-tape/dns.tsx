import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DNS = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.dns;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function Dns(props: DiagramNodeProps) {
  return <Shape {...DNS} {...props} _style={extendStyle(DNS, props)} />
}
