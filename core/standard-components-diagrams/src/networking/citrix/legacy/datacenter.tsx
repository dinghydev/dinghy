import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATACENTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.datacenter;',
  },
  _width: 127.5,
  _height: 135,
}

export function Datacenter(props: DiagramNodeProps) {
  return (
    <Shape {...DATACENTER} {...props} _style={extendStyle(DATACENTER, props)} />
  )
}
