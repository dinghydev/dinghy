import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OPENANALYTICS = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.openanalytics;',
  },
  _original_width: 54.900000000000006,
  _original_height: 54.900000000000006,
}

export function Openanalytics(props: DiagramNodeProps) {
  return (
    <Shape
      {...OPENANALYTICS}
      {...props}
      _style={extendStyle(OPENANALYTICS, props)}
    />
  )
}
