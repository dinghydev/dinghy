import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUDPHOTO = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cloudphoto;',
  },
  _original_width: 45,
  _original_height: 45,
}

export function Cloudphoto(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CLOUDPHOTO)} />
}
