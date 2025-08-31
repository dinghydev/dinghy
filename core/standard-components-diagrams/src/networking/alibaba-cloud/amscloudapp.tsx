import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AMSCLOUDAPP = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.amscloudapp;',
  _width: 56.699999999999996,
  _height: 39.6,
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
