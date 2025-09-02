import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HTTPDNS = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.httpdns;',
  },
  _original_width: 50.099999999999994,
  _original_height: 36.3,
}

export function Httpdns(props: DiagramNodeProps) {
  return <Shape {...HTTPDNS} {...props} _style={extendStyle(HTTPDNS, props)} />
}
