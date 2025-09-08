import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GENERATOR_AC = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;align=center;html=1;shape=mxgraph.pid.engines.generator_(ac);fontSize=45;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function GeneratorAc(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENERATOR_AC}
      {...props}
      _style={extendStyle(GENERATOR_AC, props)}
    />
  )
}
