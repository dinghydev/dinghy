import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GENERIC_PROTOCOL_2 = {
  _style:
    'endArrow=none;html=1;rounded=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;strokeColor=#475f75;strokeWidth=1.5;',
  _width: 1,
  _height: 16,
}

export function GenericProtocol2(props: DiagramNodeProps) {
  return <Shape {...GENERIC_PROTOCOL_2} {...props} />
}
