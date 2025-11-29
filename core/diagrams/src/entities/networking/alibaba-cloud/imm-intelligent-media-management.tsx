import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IMM_INTELLIGENT_MEDIA_MANAGEMENT = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.imm_intelligent_media_management;',
  },
  _original_width: 54.6,
  _original_height: 54.6,
}

export function ImmIntelligentMediaManagement(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, IMM_INTELLIGENT_MEDIA_MANAGEMENT)}
    />
  )
}
