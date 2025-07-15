import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PHYSICAL_CONNECTION = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.physical_connection;',
  _width: 54.300000000000004,
  _height: 40.5,
}

export function PhysicalConnection(props: DiagramNodeProps) {
  return <Shape {...PHYSICAL_CONNECTION} {...props} />
}
