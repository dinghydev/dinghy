import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DB2 = {
  _style: {
    entity:
      'shape=rect;fillColor=#0F62FE;aspect=fixed;resizable=0;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeColor=none;fontSize=14;',
  },
  _width: 0,
  _height: 48,
}

export function Db2(props: NodeProps) {
  return <Shape {...DB2} {...props} _style={extendStyle(DB2, props)} />
}
