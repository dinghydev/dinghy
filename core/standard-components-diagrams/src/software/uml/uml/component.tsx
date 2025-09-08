import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPONENT = {
  _style: {
    entity: 'html=1;dropTarget=0;whiteSpace=wrap;',
  },
  _original_width: 0,
  _original_height: 90,
}

export function Component(props: DiagramNodeProps) {
  return (
    <Shape {...COMPONENT} {...props} _style={extendStyle(COMPONENT, props)} />
  )
}
