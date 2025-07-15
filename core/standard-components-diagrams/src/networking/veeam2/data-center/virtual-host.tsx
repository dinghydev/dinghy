import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_HOST = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.virtual_host;',
  _width: 82,
  _height: 79,
}

export function VirtualHost(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_HOST} {...props} />
}
