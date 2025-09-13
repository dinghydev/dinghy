import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MARIADB = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mariadb;',
  },
  _width: 51,
  _height: 38.4,
}

export function Mariadb(props: DiagramNodeProps) {
  return <Shape {...MARIADB} {...props} _style={extendStyle(MARIADB, props)} />
}
