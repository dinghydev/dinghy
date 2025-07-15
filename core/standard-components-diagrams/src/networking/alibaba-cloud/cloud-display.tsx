import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_DISPLAY = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cloud_display;',
  _width: 54.900000000000006,
  _height: 43.199999999999996,
}

export function CloudDisplay(props: DiagramNodeProps) {
  return <Shape {...CLOUD_DISPLAY} {...props} />
}
