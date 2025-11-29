import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const XENDESKTOP_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.xendesktop_server;',
  },
  _original_width: 75,
  _original_height: 91,
}

export function XendesktopServer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, XENDESKTOP_SERVER)} />
}
