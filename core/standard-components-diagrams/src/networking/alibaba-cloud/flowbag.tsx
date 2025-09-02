import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLOWBAG = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.flowbag;',
  },
  _original_width: 55.2,
  _original_height: 35.4,
}

export function Flowbag(props: DiagramNodeProps) {
  return <Shape {...FLOWBAG} {...props} _style={extendStyle(FLOWBAG, props)} />
}
