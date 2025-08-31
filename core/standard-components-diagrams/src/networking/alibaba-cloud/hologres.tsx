import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HOLOGRES = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.hologres;',
  },
  _width: 54.900000000000006,
  _height: 50.099999999999994,
}

export function Hologres(props: DiagramNodeProps) {
  return (
    <Shape {...HOLOGRES} {...props} _style={extendStyle(HOLOGRES, props)} />
  )
}
