import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AMSCLOUDAPP = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.amscloudapp;',
  },
  _original_width: 56.699999999999996,
  _original_height: 39.6,
}

export function Amscloudapp(props: DiagramNodeProps) {
  return (
    <Shape
      {...AMSCLOUDAPP}
      {...props}
      _style={extendStyle(AMSCLOUDAPP, props)}
    />
  )
}
