import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PBX_SERVER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.pbx_server;',
  _width: 65,
  _height: 85,
}

export function PbxServer(props: DiagramNodeProps) {
  return (
    <Shape {...PBX_SERVER} {...props} _style={extendStyle(PBX_SERVER, props)} />
  )
}
