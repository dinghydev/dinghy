import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DDOS_PROTECTION = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ddos_protection;',
  },
  _original_width: 41.4,
  _original_height: 47.400000000000006,
}

export function DdosProtection(props: DiagramNodeProps) {
  return (
    <Shape
      {...DDOS_PROTECTION}
      {...props}
      _style={extendStyle(DDOS_PROTECTION, props)}
    />
  )
}
