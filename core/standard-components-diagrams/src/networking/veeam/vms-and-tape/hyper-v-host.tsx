import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HYPER_V_HOST = {
  _style:
    'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.hyper_v_host;',
  _width: 108,
  _height: 104,
}

export function HyperVHost(props: DiagramNodeProps) {
  return <Shape {...HYPER_V_HOST} {...props} />
}
