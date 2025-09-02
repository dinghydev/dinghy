import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPPC = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.sppc;',
  },
  _original_width: 50.4,
  _original_height: 44.1,
}

export function Sppc(props: DiagramNodeProps) {
  return <Shape {...SPPC} {...props} _style={extendStyle(SPPC, props)} />
}
