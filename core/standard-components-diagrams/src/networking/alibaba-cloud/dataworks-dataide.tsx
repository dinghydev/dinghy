import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATAWORKS_DATAIDE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dataworks_dataide;',
  _width: 45.6,
  _height: 52.5,
}

export function DataworksDataide(props: DiagramNodeProps) {
  return <Shape {...DATAWORKS_DATAIDE} {...props} />
}
