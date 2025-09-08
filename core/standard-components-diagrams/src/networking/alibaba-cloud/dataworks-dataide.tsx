import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATAWORKS_DATAIDE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dataworks_dataide;',
  },
  _original_width: 45.6,
  _original_height: 52.5,
}

export function DataworksDataide(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATAWORKS_DATAIDE}
      {...props}
      _style={extendStyle(DATAWORKS_DATAIDE, props)}
    />
  )
}
