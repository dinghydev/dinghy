import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AMSCLOUDAPP = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.amscloudapp;',
  },
  _width: 56.699999999999996,
  _height: 39.6,
}

export function Amscloudapp(props: NodeProps) {
  return (
    <Shape
      {...AMSCLOUDAPP}
      {...props}
      _style={extendStyle(AMSCLOUDAPP, props)}
    />
  )
}
