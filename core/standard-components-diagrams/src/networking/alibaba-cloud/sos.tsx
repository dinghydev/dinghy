import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SOS = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.sos;',
  _width: 46.5,
  _height: 47.400000000000006,
}

export function Sos(props: DiagramNodeProps) {
  return <Shape {...SOS} {...props} />
}
