import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATACENTER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.datacenter;',
  _width: 83,
  _height: 53,
}

export function Datacenter(props: DiagramNodeProps) {
  return (
    <Shape {...DATACENTER} {...props} _style={extendStyle(DATACENTER, props)} />
  )
}
