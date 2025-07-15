import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MAINFRAME_HOST = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.mainframe_host;',
  _width: 44,
  _height: 42,
}

export function MainframeHost(props: DiagramNodeProps) {
  return <Shape {...MAINFRAME_HOST} {...props} />
}
