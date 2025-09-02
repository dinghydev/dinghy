import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_HOST = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.virtual_host;',
  },
  _original_width: 108,
  _original_height: 104,
}

export function VirtualHost(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_HOST}
      {...props}
      _style={extendStyle(VIRTUAL_HOST, props)}
    />
  )
}
