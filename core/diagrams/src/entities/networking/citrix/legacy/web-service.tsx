import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEB_SERVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.web_service;',
  },
  _original_width: 63,
  _original_height: 60,
}

export function WebService(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WEB_SERVICE)} />
}
