import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RPD_REMOTING_FILE = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.azure.rdp_remoting_file;fillColor=#0078D7;',
  _width: 48,
  _height: 50,
}

export function RpdRemotingFile(props: DiagramNodeProps) {
  return <Shape {...RPD_REMOTING_FILE} {...props} />
}
