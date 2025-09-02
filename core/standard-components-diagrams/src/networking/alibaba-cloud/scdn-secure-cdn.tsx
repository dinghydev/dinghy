import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCDN_SECURE_CDN = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.scdn_secure_cdn;',
  },
  _original_width: 57.599999999999994,
  _original_height: 59.4,
}

export function ScdnSecureCdn(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCDN_SECURE_CDN}
      {...props}
      _style={extendStyle(SCDN_SECURE_CDN, props)}
    />
  )
}
