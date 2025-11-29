import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SKYPE_FOR_BUSINESS_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.skype_for_business_server;',
  },
  _original_width: 54,
  _original_height: 55,
}

export function SkypeForBusinessServer(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, SKYPE_FOR_BUSINESS_SERVER)} />
  )
}
