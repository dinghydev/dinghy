import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRIVATELINK = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.privatelink;',
  },
  _width: 56.1,
  _height: 56.699999999999996,
}

export function Privatelink(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRIVATELINK}
      {...props}
      _style={extendStyle(PRIVATELINK, props)}
    />
  )
}
