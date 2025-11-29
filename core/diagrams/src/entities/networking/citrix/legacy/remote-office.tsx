import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REMOTE_OFFICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.remote_office;',
  },
  _width: 92,
  _height: 41.5,
}

export function RemoteOffice(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, REMOTE_OFFICE)} />
}
