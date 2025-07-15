import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INITIAL_PREUDOSTATE_NODE = {
  _style: 'ellipse;fillColor=strokeColor;html=1;',
  _width: 30,
  _height: 30,
}

export function InitialPreudostateNode(props: DiagramNodeProps) {
  return <Shape {...INITIAL_PREUDOSTATE_NODE} {...props} />
}
