import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTIONTRAIL = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.actiontrail;',
  _width: 60,
  _height: 60,
}

export function Actiontrail(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTIONTRAIL}
      {...props}
      _style={extendStyle(ACTIONTRAIL, props)}
    />
  )
}
