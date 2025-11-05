import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_DISPLAY = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cloud_display;',
  },
  _original_width: 54.900000000000006,
  _original_height: 43.199999999999996,
}

export function CloudDisplay(props: NodeProps) {
  return (
    <Shape
      {...CLOUD_DISPLAY}
      {...props}
      _style={extendStyle(CLOUD_DISPLAY, props)}
    />
  )
}
