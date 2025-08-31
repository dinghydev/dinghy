import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BIZDEVOPS = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.bizdevops;',
  },
  _width: 60.3,
  _height: 50.099999999999994,
}

export function Bizdevops(props: DiagramNodeProps) {
  return (
    <Shape {...BIZDEVOPS} {...props} _style={extendStyle(BIZDEVOPS, props)} />
  )
}
