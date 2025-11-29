import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VCS_VISUAL_COMPUTING_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.vcs_visual_computing_service;',
  },
  _original_width: 51.3,
  _original_height: 52.5,
}

export function VcsVisualComputingService(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, VCS_VISUAL_COMPUTING_SERVICE)}
    />
  )
}
