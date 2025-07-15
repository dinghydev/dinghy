import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANTIBOT = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.antibot;',
  _width: 55.5,
  _height: 49.5,
}

export function Antibot(props: DiagramNodeProps) {
  return <Shape {...ANTIBOT} {...props} />
}
