import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DB2 = {
  _style: {
    entity:
      'shape=rect;fillColor=#0F62FE;aspect=fixed;resizable=0;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeColor=none;fontSize=14;',
  },
  _original_width: 0,
  _original_height: 48,
}

export function Db2(props: DiagramNodeProps) {
  return <Shape {...DB2} {...props} _style={extendStyle(DB2, props)} />
}
