import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAS_SITUATIONAL_AWARENESS = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.sas_situational_awareness;',
  },
  _original_width: 46.5,
  _original_height: 49.199999999999996,
}

export function SasSituationalAwareness(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, SAS_SITUATIONAL_AWARENESS)} />
  )
}
