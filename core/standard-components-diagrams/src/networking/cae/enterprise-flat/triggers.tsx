import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRIGGERS = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.mscae.enterprise.triggers;fillColor=#0078D7;',
  _width: 47,
  _height: 50,
}

export function Triggers(props: DiagramNodeProps) {
  return <Shape {...TRIGGERS} {...props} />
}
