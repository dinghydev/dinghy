import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_FLOW = {
  _style: 'endArrow=classic;html=1;fontColor=#FF3333;',
  _width: 50,
  _height: 50,
}

export function DataFlow(props: DiagramNodeProps) {
  return <Dependency {...DATA_FLOW} {...props} />
}
