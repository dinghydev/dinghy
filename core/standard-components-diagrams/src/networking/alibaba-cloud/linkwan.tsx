import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LINKWAN = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.linkwan;',
  _width: 52.5,
  _height: 54.900000000000006,
}

export function Linkwan(props: DiagramNodeProps) {
  return <Shape {...LINKWAN} {...props} _style={extendStyle(LINKWAN, props)} />
}
