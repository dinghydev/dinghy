import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IMM_INTELLIGENT_MEDIA_MANAGEMENT = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.imm_intelligent_media_management;',
  _width: 54.6,
  _height: 54.6,
}

export function ImmIntelligentMediaManagement(props: DiagramNodeProps) {
  return <Shape {...IMM_INTELLIGENT_MEDIA_MANAGEMENT} {...props} />
}
