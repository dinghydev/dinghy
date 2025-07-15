import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPLICATION = {
  _style:
    'shape=ellipse;fillColor=#A56EFF;aspect=fixed;resizable=0;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeColor=none;fontSize=14;',
  _width: 0,
  _height: 48,
}

export function Application(props: DiagramNodeProps) {
  return <Shape {...APPLICATION} {...props} />
}
