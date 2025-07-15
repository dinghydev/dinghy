import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DDOS_PRO = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ddos-pro;',
  _width: 47.7,
  _height: 46.800000000000004,
}

export function DdosPro(props: DiagramNodeProps) {
  return <Shape {...DDOS_PRO} {...props} />
}
