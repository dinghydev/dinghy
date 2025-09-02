import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POLARDB = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.polardb;',
  },
  _original_width: 55.5,
  _original_height: 57.3,
}

export function Polardb(props: DiagramNodeProps) {
  return <Shape {...POLARDB} {...props} _style={extendStyle(POLARDB, props)} />
}
