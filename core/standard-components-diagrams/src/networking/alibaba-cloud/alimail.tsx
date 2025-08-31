import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALIMAIL = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.alimail;',
  },
  _width: 57.599999999999994,
  _height: 39,
}

export function Alimail(props: DiagramNodeProps) {
  return <Shape {...ALIMAIL} {...props} _style={extendStyle(ALIMAIL, props)} />
}
