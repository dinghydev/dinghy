import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HTTPDNS = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.httpdns;',
  },
  _width: 50.099999999999994,
  _height: 36.3,
}

export function Httpdns(props: NodeProps) {
  return <Shape {...HTTPDNS} {...props} _style={extendStyle(HTTPDNS, props)} />
}
