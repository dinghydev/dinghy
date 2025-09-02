import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUDAP = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cloudap;',
  },
  _original_width: 54.900000000000006,
  _original_height: 55.2,
}

export function Cloudap(props: DiagramNodeProps) {
  return <Shape {...CLOUDAP} {...props} _style={extendStyle(CLOUDAP, props)} />
}
