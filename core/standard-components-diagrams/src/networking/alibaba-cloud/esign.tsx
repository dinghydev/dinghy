import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ESIGN = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.esign;',
  },
  _width: 41.699999999999996,
  _height: 45.9,
}

export function Esign(props: DiagramNodeProps) {
  return <Shape {...ESIGN} {...props} _style={extendStyle(ESIGN, props)} />
}
