import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SOS = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.sos;',
  },
  _original_width: 46.5,
  _original_height: 47.400000000000006,
}

export function Sos(props: NodeProps) {
  return <Shape {...SOS} {...props} _style={extendStyle(SOS, props)} />
}
