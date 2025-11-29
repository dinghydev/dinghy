import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const YANDEX = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.yandex',
  },
  _width: 31.8,
  _height: 66.4,
}

export function Yandex(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, YANDEX)} />
}
