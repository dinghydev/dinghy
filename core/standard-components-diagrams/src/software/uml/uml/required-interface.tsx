import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REQUIRED_INTERFACE = {
  _style: {
    entity:
      'shape=requiredInterface;html=1;verticalLabelPosition=bottom;sketch=0;',
  },
  _original_width: 10,
  _original_height: 20,
}

export function RequiredInterface(props: DiagramNodeProps) {
  return (
    <Shape
      {...REQUIRED_INTERFACE}
      {...props}
      _style={extendStyle(REQUIRED_INTERFACE, props)}
    />
  )
}
