import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IPTV_CONTENT_MANAGER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.iptv_content_manager;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 78,
  _height: 51,
}

export function IptvContentManager(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IPTV_CONTENT_MANAGER)} />
}
