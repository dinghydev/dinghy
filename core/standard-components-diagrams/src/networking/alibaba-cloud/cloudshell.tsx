import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUDSHELL = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cloudshell;',
  },
  _original_width: 47.400000000000006,
  _original_height: 37.8,
}

export function Cloudshell(props: DiagramNodeProps) {
  return (
    <Shape {...CLOUDSHELL} {...props} _style={extendStyle(CLOUDSHELL, props)} />
  )
}
