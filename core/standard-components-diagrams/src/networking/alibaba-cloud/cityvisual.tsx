import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CITYVISUAL = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cityvisual;',
  },
  _original_width: 52.5,
  _original_height: 36.9,
}

export function Cityvisual(props: DiagramNodeProps) {
  return (
    <Shape {...CITYVISUAL} {...props} _style={extendStyle(CITYVISUAL, props)} />
  )
}
