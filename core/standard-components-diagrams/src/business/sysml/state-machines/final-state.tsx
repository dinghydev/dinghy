import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FINAL_STATE = {
  _style:
    'shape=mxgraph.sysml.actFinal;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;',
  _width: 40,
  _height: 40,
}

export function FinalState(props: DiagramNodeProps) {
  return <Shape {...FINAL_STATE} {...props} />
}
