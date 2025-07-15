import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REVERSE_PROXY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.reverse_proxy;',
  _width: 41,
  _height: 53,
}

export function ReverseProxy(props: DiagramNodeProps) {
  return <Shape {...REVERSE_PROXY} {...props} />
}
