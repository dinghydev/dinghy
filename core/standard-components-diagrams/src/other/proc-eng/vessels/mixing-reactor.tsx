import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MIXING_REACTOR = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.mixing_reactor;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 50,
  _height: 96,
}

export function MixingReactor(props: DiagramNodeProps) {
  return (
    <Shape
      {...MIXING_REACTOR}
      {...props}
      _style={extendStyle(MIXING_REACTOR, props)}
    />
  )
}
