import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATAQUOTIENT = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dataquotient;',
  },
  _original_width: 48.300000000000004,
  _original_height: 48.300000000000004,
}

export function Dataquotient(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATAQUOTIENT}
      {...props}
      _style={extendStyle(DATAQUOTIENT, props)}
    />
  )
}
