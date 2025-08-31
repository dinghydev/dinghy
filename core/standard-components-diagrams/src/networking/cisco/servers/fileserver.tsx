import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FILESERVER = {
  _style:
    'shape=mxgraph.cisco.servers.fileserver;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 43,
  _height: 62,
}

export function Fileserver(props: DiagramNodeProps) {
  return (
    <Shape {...FILESERVER} {...props} _style={extendStyle(FILESERVER, props)} />
  )
}
