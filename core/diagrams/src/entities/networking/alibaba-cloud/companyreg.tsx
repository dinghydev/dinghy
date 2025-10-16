import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPANYREG = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.companyreg;',
  },
  _original_width: 47.400000000000006,
  _original_height: 52.5,
}

export function Companyreg(props: DiagramNodeProps) {
  return (
    <Shape {...COMPANYREG} {...props} _style={extendStyle(COMPANYREG, props)} />
  )
}
