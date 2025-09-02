import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABOT = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.databot;',
  },
  _original_width: 45.3,
  _original_height: 52.2,
}

export function Databot(props: DiagramNodeProps) {
  return <Shape {...DATABOT} {...props} _style={extendStyle(DATABOT, props)} />
}
