import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUDDEV = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.clouddev;',
  _width: 56.699999999999996,
  _height: 40.5,
}

export function Clouddev(props: DiagramNodeProps) {
  return <Shape {...CLOUDDEV} {...props} />
}
