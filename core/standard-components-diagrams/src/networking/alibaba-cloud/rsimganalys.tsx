import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RSIMGANALYS = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.rsimganalys;',
  },
  _original_width: 50.099999999999994,
  _original_height: 44.4,
}

export function Rsimganalys(props: DiagramNodeProps) {
  return (
    <Shape
      {...RSIMGANALYS}
      {...props}
      _style={extendStyle(RSIMGANALYS, props)}
    />
  )
}
