import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUDDESKTOP = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.clouddesktop;',
  },
  _original_width: 54.900000000000006,
  _original_height: 55.2,
}

export function Clouddesktop(props: NodeProps) {
  return (
    <Shape
      {...CLOUDDESKTOP}
      {...props}
      _style={extendStyle(CLOUDDESKTOP, props)}
    />
  )
}
