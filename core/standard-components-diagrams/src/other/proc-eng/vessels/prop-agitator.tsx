import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROP_AGITATOR = {
  _style:
    'shape=mxgraph.pid.vessels.prop_agitator;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 20,
  _height: 88,
}

export function PropAgitator(props: DiagramNodeProps) {
  return <Shape {...PROP_AGITATOR} {...props} />
}
