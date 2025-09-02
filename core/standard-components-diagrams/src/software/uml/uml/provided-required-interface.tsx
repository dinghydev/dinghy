import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROVIDED_REQUIRED_INTERFACE = {
  _style: {
    entity:
      'shape=providedRequiredInterface;html=1;verticalLabelPosition=bottom;sketch=0;',
  },
  _original_width: 20,
  _original_height: 20,
}

export function ProvidedRequiredInterface(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROVIDED_REQUIRED_INTERFACE}
      {...props}
      _style={extendStyle(PROVIDED_REQUIRED_INTERFACE, props)}
    />
  )
}
