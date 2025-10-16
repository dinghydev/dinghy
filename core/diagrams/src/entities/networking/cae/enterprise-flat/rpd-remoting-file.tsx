import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RPD_REMOTING_FILE = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.azure.rdp_remoting_file;fillColor=#0078D7;',
  },
  _original_width: 48,
  _original_height: 50,
}

export function RpdRemotingFile(props: DiagramNodeProps) {
  return (
    <Shape
      {...RPD_REMOTING_FILE}
      {...props}
      _style={extendStyle(RPD_REMOTING_FILE, props)}
    />
  )
}
