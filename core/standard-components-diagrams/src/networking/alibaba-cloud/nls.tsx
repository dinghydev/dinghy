import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NLS = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nls;',
  },
  _original_width: 54.900000000000006,
  _original_height: 49.199999999999996,
}

export function Nls(props: DiagramNodeProps) {
  return <Shape {...NLS} {...props} _style={extendStyle(NLS, props)} />
}
