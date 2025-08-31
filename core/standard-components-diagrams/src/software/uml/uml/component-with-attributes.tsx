import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_WITH_ATTRIBUTES = {
  _style: {
    entity: 'align=left;overflow=fill;html=1;dropTarget=0;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 90,
}

export function ComponentWithAttributes(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_WITH_ATTRIBUTES}
      {...props}
      _style={extendStyle(COMPONENT_WITH_ATTRIBUTES, props)}
    />
  )
}
