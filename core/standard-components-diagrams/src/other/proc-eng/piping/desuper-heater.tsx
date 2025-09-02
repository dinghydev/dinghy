import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DESUPER_HEATER = {
  _style: {
    entity:
      'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.piping.desuper_heater;',
  },
  _original_width: 50,
  _original_height: 50,
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
