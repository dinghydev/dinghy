import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IMAGESEARCH = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.imagesearch;',
  },
  _original_width: 47.7,
  _original_height: 47.7,
}

export function Imagesearch(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IMAGESEARCH)} />
}
