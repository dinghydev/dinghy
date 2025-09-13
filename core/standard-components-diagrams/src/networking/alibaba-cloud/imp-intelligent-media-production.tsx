import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IMP_INTELLIGENT_MEDIA_PRODUCTION = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.imp_intelligent_media_production;',
  },
  _width: 52.8,
  _height: 36.6,
}

export function ImpIntelligentMediaProduction(props: DiagramNodeProps) {
  return (
    <Shape
      {...IMP_INTELLIGENT_MEDIA_PRODUCTION}
      {...props}
      _style={extendStyle(IMP_INTELLIGENT_MEDIA_PRODUCTION, props)}
    />
  )
}
