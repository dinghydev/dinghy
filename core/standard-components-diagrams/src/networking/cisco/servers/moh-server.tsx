import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOH_SERVER = {
  _style:
    'shape=mxgraph.cisco.servers.moh_server;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 43,
  _height: 62,
}

export function MohServer(props: DiagramNodeProps) {
  return (
    <Shape {...MOH_SERVER} {...props} _style={extendStyle(MOH_SERVER, props)} />
  )
}
