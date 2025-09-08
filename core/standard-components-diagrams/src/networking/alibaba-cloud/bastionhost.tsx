import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BASTIONHOST = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.bastionhost;',
  },
  _original_width: 50.4,
  _original_height: 39.900000000000006,
}

export function Bastionhost(props: DiagramNodeProps) {
  return (
    <Shape
      {...BASTIONHOST}
      {...props}
      _style={extendStyle(BASTIONHOST, props)}
    />
  )
}
