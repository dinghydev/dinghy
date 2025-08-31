import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROP_AGITATOR = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.prop_agitator;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 20,
  _height: 88,
}

export function PropAgitator(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROP_AGITATOR}
      {...props}
      _style={extendStyle(PROP_AGITATOR, props)}
    />
  )
}
