import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATAV = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.datav;',
  },
  _original_width: 49.199999999999996,
  _original_height: 44.4,
}

export function Datav(props: DiagramNodeProps) {
  return <Shape {...DATAV} {...props} _style={extendStyle(DATAV, props)} />
}
