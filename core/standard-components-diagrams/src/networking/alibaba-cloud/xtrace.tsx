import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const XTRACE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.xtrace;',
  },
  _width: 41.4,
  _height: 50.099999999999994,
}

export function Xtrace(props: DiagramNodeProps) {
  return <Shape {...XTRACE} {...props} _style={extendStyle(XTRACE, props)} />
}
