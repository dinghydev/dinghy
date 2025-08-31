import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DESUPER_HEATER = {
  _style: {
    entity:
      'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.piping.desuper_heater;',
  },
  _width: 60,
  _height: 60,
}

export function DesuperHeater(props: DiagramNodeProps) {
  return (
    <Shape
      {...DESUPER_HEATER}
      {...props}
      _style={extendStyle(DESUPER_HEATER, props)}
    />
  )
}
