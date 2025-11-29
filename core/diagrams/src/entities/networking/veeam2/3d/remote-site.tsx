import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REMOTE_SITE = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.remote_site;',
  },
  _original_width: 46,
  _original_height: 60,
}

export function RemoteSite(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, REMOTE_SITE)} />
}
