import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OFF_PAGE_REFERENCE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=offPageConnector;rounded=0;size=0.5;',
  _width: 60,
  _height: 60,
}

export function OffPageReference(props: DiagramNodeProps) {
  return <Shape {...OFF_PAGE_REFERENCE} {...props} />
}
