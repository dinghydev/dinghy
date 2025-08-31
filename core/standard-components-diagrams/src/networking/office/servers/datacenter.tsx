import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATACENTER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.datacenter;',
  },
  _width: 60,
  _height: 60,
}

export function Datacenter(props: DiagramNodeProps) {
  return (
    <Shape {...DATACENTER} {...props} _style={extendStyle(DATACENTER, props)} />
  )
}
