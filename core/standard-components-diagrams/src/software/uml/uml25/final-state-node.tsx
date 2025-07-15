import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FINAL_STATE_NODE = {
  _style: 'ellipse;html=1;shape=endState;fillColor=strokeColor;',
  _width: 30,
  _height: 30,
}

export function FinalStateNode(props: DiagramNodeProps) {
  return <Shape {...FINAL_STATE_NODE} {...props} />
}
