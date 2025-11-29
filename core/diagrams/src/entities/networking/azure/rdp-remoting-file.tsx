import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RDP_REMOTING_FILE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.rdp_remoting_file;pointerEvents=1;',
  },
  _original_width: 47.5,
  _original_height: 50,
}

export function RdpRemotingFile(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RDP_REMOTING_FILE)} />
}
