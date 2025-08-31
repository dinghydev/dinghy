import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROXY = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.proxy;',
  },
  _width: 46,
  _height: 46,
}

export function Proxy(props: DiagramNodeProps) {
  return <Shape {...PROXY} {...props} _style={extendStyle(PROXY, props)} />
}
