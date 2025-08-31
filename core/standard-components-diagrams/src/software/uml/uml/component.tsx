import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT = {
  _style: {
    entity: 'html=1;dropTarget=0;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 90,
}

export function Component(props: DiagramNodeProps) {
  return (
    <Shape {...COMPONENT} {...props} _style={extendStyle(COMPONENT, props)} />
  )
}
