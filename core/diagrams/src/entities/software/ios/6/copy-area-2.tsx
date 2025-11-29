import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COPY_AREA_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.ios.rect;fillColor=#2266ff;strokeColor=none;opacity=30;sketch=0;',
  },
  _width: 1,
  _height: 80,
}

export function CopyArea2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COPY_AREA_2)} />
}
