import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUDDESKTOP = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.clouddesktop;',
  _width: 54.900000000000006,
  _height: 55.2,
}

export function Clouddesktop(props: DiagramNodeProps) {
  return <Shape {...CLOUDDESKTOP} {...props} />
}
