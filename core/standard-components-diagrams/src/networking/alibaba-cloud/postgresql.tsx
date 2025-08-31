import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POSTGRESQL = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.postgresql;',
  },
  _width: 48,
  _height: 47.7,
}

export function Postgresql(props: DiagramNodeProps) {
  return (
    <Shape {...POSTGRESQL} {...props} _style={extendStyle(POSTGRESQL, props)} />
  )
}
