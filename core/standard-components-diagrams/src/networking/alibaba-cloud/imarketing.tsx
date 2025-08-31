import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IMARKETING = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.imarketing;',
  },
  _width: 43.199999999999996,
  _height: 41.699999999999996,
}

export function Imarketing(props: DiagramNodeProps) {
  return (
    <Shape {...IMARKETING} {...props} _style={extendStyle(IMARKETING, props)} />
  )
}
