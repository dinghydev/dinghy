import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROXY = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.proxy;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function Proxy(props: DiagramNodeProps) {
  return <Shape {...PROXY} {...props} _style={extendStyle(PROXY, props)} />
}
