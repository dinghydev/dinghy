import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AMMETER = {
  _style: {
    entity:
      'verticalLabelPosition=middle;shadow=0;dashed=0;align=center;html=1;verticalAlign=middle;strokeWidth=1;shape=ellipse;aspect=fixed;fontSize=50;',
  },
  _original_width: 90,
  _original_height: 90,
}

export function Ammeter(props: NodeProps) {
  return <Shape {...AMMETER} {...props} _style={extendStyle(AMMETER, props)} />
}
