import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OCEANBASE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.oceanbase;',
  _width: 50.099999999999994,
  _height: 44.1,
}

export function Oceanbase(props: DiagramNodeProps) {
  return (
    <Shape {...OCEANBASE} {...props} _style={extendStyle(OCEANBASE, props)} />
  )
}
