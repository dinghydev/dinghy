import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DB2 = {
  _style:
    'shape=rect;fillColor=#0F62FE;aspect=fixed;resizable=0;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeColor=none;fontSize=14;',
  _width: 0,
  _height: 48,
}

export function Db2(props: DiagramNodeProps) {
  return <Shape {...DB2} {...props} />
}
