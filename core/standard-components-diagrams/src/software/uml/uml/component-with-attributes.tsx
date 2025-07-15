import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_WITH_ATTRIBUTES = {
  _style: 'align=left;overflow=fill;html=1;dropTarget=0;whiteSpace=wrap;',
  _width: 0,
  _height: 90,
}

export function ComponentWithAttributes(props: DiagramNodeProps) {
  return <Shape {...COMPONENT_WITH_ATTRIBUTES} {...props} />
}
