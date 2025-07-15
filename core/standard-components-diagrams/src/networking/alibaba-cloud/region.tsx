import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REGION = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.region;',
  _width: 47.400000000000006,
  _height: 54.300000000000004,
}

export function Region(props: DiagramNodeProps) {
  return <Shape {...REGION} {...props} />
}
