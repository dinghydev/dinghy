import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FLOATING_ACTION_BUTTON = {
  _style:
    'shape=ellipse;fillColor=#FF4081;strokeColor=none;shadow=1;aspect=fixed;sketch=0;html=1;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;',
  _width: 0,
  _height: 56,
}

export function FloatingActionButton(props: DiagramNodeProps) {
  return <Shape {...FLOATING_ACTION_BUTTON} {...props} />
}
