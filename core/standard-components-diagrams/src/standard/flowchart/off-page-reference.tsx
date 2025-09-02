import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OFF_PAGE_REFERENCE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=offPageConnector;rounded=0;size=0.5;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function OffPageReference(props: DiagramNodeProps) {
  return (
    <Shape
      {...OFF_PAGE_REFERENCE}
      {...props}
      _style={extendStyle(OFF_PAGE_REFERENCE, props)}
    />
  )
}
