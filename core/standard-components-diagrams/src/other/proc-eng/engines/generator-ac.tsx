import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GENERATOR_AC = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;align=center;html=1;shape=mxgraph.pid.engines.generator_(ac);fontSize=45;',
  },
  _width: 60,
  _height: 60,
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
