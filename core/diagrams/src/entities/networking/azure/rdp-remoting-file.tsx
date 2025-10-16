import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RDP_REMOTING_FILE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.rdp_remoting_file;pointerEvents=1;',
  },
  _original_width: 47.5,
  _original_height: 50,
}

export function RdpRemotingFile(props: DiagramNodeProps) {
  return (
    <Shape
      {...RDP_REMOTING_FILE}
      {...props}
      _style={extendStyle(RDP_REMOTING_FILE, props)}
    />
  )
}
