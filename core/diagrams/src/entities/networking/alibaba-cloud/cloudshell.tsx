import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUDSHELL = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cloudshell;',
  },
  _width: 47.400000000000006,
  _height: 37.8,
}

export function Cloudshell(props: NodeProps) {
  return (
    <Shape {...CLOUDSHELL} {...props} _style={extendStyle(CLOUDSHELL, props)} />
  )
}
