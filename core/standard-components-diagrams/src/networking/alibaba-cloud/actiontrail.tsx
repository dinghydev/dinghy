import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTIONTRAIL = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.actiontrail;',
  _width: 50.099999999999994,
  _height: 50.099999999999994,
}

export function Actiontrail(props: DiagramNodeProps) {
  return <Shape {...ACTIONTRAIL} {...props} />
}
