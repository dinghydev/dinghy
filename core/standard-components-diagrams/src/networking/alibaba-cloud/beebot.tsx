import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BEEBOT = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.beebot;',
  },
  _original_width: 59.7,
  _original_height: 54.900000000000006,
}

export function Beebot(props: DiagramNodeProps) {
  return <Shape {...BEEBOT} {...props} _style={extendStyle(BEEBOT, props)} />
}
