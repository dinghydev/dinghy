import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IDRSSERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.idrsservice;',
  },
  _original_width: 56.1,
  _original_height: 56.1,
}

export function Idrsservice(props: NodeProps) {
  return (
    <Shape
      {...IDRSSERVICE}
      {...props}
      _style={extendStyle(IDRSSERVICE, props)}
    />
  )
}
