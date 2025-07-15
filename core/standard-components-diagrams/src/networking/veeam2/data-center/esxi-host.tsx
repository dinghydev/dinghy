import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ESXI_HOST = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.esxi_host;',
  _width: 82,
  _height: 79,
}

export function EsxiHost(props: DiagramNodeProps) {
  return <Shape {...ESXI_HOST} {...props} />
}
