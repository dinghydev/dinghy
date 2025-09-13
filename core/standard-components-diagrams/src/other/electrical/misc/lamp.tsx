import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LAMP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.lamp',
  },
  _width: 50,
  _height: 100,
}

export function Lamp(props: DiagramNodeProps) {
  return <Shape {...LAMP} {...props} _style={extendStyle(LAMP, props)} />
}
