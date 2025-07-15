import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AMMETER = {
  _style:
    'verticalLabelPosition=middle;shadow=0;dashed=0;align=center;html=1;verticalAlign=middle;strokeWidth=1;shape=ellipse;aspect=fixed;fontSize=50;',
  _width: 90,
  _height: 90,
}

export function Ammeter(props: DiagramNodeProps) {
  return <Shape {...AMMETER} {...props} />
}
