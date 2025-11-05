import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIGITAL_TWINS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Digital_Twins.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function DigitalTwins(props: NodeProps) {
  return (
    <Shape
      {...DIGITAL_TWINS}
      {...props}
      _style={extendStyle(DIGITAL_TWINS, props)}
    />
  )
}
