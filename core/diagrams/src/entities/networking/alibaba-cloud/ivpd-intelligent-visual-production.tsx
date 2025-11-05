import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IVPD_INTELLIGENT_VISUAL_PRODUCTION = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ivpd_intelligent_visual_production;',
  },
  _original_width: 46.5,
  _original_height: 46.5,
}

export function IvpdIntelligentVisualProduction(props: NodeProps) {
  return (
    <Shape
      {...IVPD_INTELLIGENT_VISUAL_PRODUCTION}
      {...props}
      _style={extendStyle(IVPD_INTELLIGENT_VISUAL_PRODUCTION, props)}
    />
  )
}
