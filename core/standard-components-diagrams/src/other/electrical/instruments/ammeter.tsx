import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AMMETER = {
  _style: {
    entity:
      'verticalLabelPosition=middle;shadow=0;dashed=0;align=center;html=1;verticalAlign=middle;strokeWidth=1;shape=ellipse;aspect=fixed;fontSize=50;',
  },
  _width: 60,
  _height: 60,
}

export function Ammeter(props: DiagramNodeProps) {
  return <Shape {...AMMETER} {...props} _style={extendStyle(AMMETER, props)} />
}
