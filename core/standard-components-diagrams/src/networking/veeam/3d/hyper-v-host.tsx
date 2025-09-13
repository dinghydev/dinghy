import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HYPER_V_HOST = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.hyper_v_host;',
  },
  _width: 110,
  _height: 98,
}

export function HyperVHost(props: DiagramNodeProps) {
  return (
    <Shape
      {...HYPER_V_HOST}
      {...props}
      _style={extendStyle(HYPER_V_HOST, props)}
    />
  )
}
