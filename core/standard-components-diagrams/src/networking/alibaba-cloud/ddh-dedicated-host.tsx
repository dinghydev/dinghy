import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DDH_DEDICATED_HOST = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ddh_dedicated_host;',
  },
  _original_width: 47.400000000000006,
  _original_height: 47.400000000000006,
}

export function DdhDedicatedHost(props: DiagramNodeProps) {
  return (
    <Shape
      {...DDH_DEDICATED_HOST}
      {...props}
      _style={extendStyle(DDH_DEDICATED_HOST, props)}
    />
  )
}
