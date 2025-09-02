import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTENT_SECURITY = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.content_security;',
  },
  _original_width: 46.5,
  _original_height: 47.1,
}

export function ContentSecurity(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTENT_SECURITY}
      {...props}
      _style={extendStyle(CONTENT_SECURITY, props)}
    />
  )
}
