import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHEVRON_LIST_11 = {
  _style:
    'shape=rect;fillColor=#BAC8D3;strokeColor=none;fontSize=12;html=1;whiteSpace=wrap;align=left;verticalAlign=top;spacing=5;rounded=0;',
  _width: 14,
  _height: 420,
}

export function ChevronList11(props: DiagramNodeProps) {
  return <Shape {...CHEVRON_LIST_11} {...props} />
}
