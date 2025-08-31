import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RDP_REMOTING_FILE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.rdp_remoting_file;pointerEvents=1;',
  _width: 47.5,
  _height: 50,
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
