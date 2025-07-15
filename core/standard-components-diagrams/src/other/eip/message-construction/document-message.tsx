import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOCUMENT_MESSAGE = {
  _style:
    'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#C7A0FF;fontStyle=1;whiteSpace=wrap;html=1;',
  _width: 2,
  _height: 30,
}

export function DocumentMessage(props: DiagramNodeProps) {
  return <Shape {...DOCUMENT_MESSAGE} {...props} />
}
