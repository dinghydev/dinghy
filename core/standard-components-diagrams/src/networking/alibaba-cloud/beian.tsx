import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BEIAN = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.beian;',
  },
  _original_width: 47.1,
  _original_height: 48.300000000000004,
}

export function Beian(props: DiagramNodeProps) {
  return <Shape {...BEIAN} {...props} _style={extendStyle(BEIAN, props)} />
}
