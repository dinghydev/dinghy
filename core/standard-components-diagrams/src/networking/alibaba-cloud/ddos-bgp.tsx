import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DDOS_BGP = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ddos-bgp;',
  },
  _width: 47.400000000000006,
  _height: 47.1,
}

export function DdosBgp(props: DiagramNodeProps) {
  return (
    <Shape {...DDOS_BGP} {...props} _style={extendStyle(DDOS_BGP, props)} />
  )
}
