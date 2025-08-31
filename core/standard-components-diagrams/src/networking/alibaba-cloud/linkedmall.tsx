import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LINKEDMALL = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.linkedmall;',
  },
  _width: 43.199999999999996,
  _height: 42,
}

export function Linkedmall(props: DiagramNodeProps) {
  return (
    <Shape {...LINKEDMALL} {...props} _style={extendStyle(LINKEDMALL, props)} />
  )
}
