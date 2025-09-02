import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUDDEV = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.clouddev;',
  },
  _original_width: 56.699999999999996,
  _original_height: 40.5,
}

export function Clouddev(props: DiagramNodeProps) {
  return (
    <Shape {...CLOUDDEV} {...props} _style={extendStyle(CLOUDDEV, props)} />
  )
}
