import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DDOS_DIP = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ddos-dip;',
  _width: 48.300000000000004,
  _height: 55.2,
}

export function DdosDip(props: DiagramNodeProps) {
  return (
    <Shape {...DDOS_DIP} {...props} _style={extendStyle(DDOS_DIP, props)} />
  )
}
