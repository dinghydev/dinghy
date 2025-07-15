import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const E_MAPREDUCE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.e-mapreduce;',
  _width: 60,
  _height: 60,
}

export function EMapreduce(props: DiagramNodeProps) {
  return <Shape {...E_MAPREDUCE} {...props} />
}
